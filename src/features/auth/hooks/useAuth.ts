import { AUTH_CONFIG } from '@/constants/auth'
import { ROUTE_PATHS } from '@/constants/path'
import authApiService from '@/features/auth/services/authApiService'
import { useNavigate } from '@/hooks/useNavigate'
import { useSearchParams } from '@/hooks/useSearchParams'
import reporter from '@/lib/reporter'
import { z } from '@/validations/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useAuthStore } from '../store/authStore'
import { AuthToken, AuthTokenProviderResponse, AuthTokenResponse, User } from '../types'
import { loginSchema, signupSchema } from '../validations'

type LoginPayload = z.infer<typeof loginSchema>
type SignupPayload = z.infer<typeof signupSchema>

export const useSignup = () => {
  const navigate = useNavigate()
  const { setTempUser } = useAuthStore()

  return useMutation({
    mutationFn: async (data: SignupPayload) => {
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
      }
      await authApiService.signup(payload)
      return { email: data.email, name: data.name } as User
    },
    onSuccess: (user) => {
      setTempUser(user)
      if (AUTH_CONFIG.isVerifyAccountEmailCodeMethod()) {
        navigate(ROUTE_PATHS.AUTH.VERIFY_ACCOUNT, { replace: true })
      } else {
        navigate(ROUTE_PATHS.AUTH.LOGIN, { replace: true })
      }
    },
  })
}

export const useLogin = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { setUser, setToken } = useAuthStore()

  return useMutation({
    mutationFn: async (data: LoginPayload) => {
      const authToken: AuthTokenResponse = await authApiService.login(data)
      setToken(authToken.accessToken)
      const authUser: User = await authApiService.getProfile()
      setUser(authUser)
      return authUser
    },
    onSuccess: () => {
      const redirect = searchParams.get('redirect')
      if (redirect) {
        navigate(redirect, { replace: true })
      } else {
        navigate(ROUTE_PATHS.DASHBOARD, { replace: true })
      }
    },
  })
}

export const useGoogleLogin = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { setUser, setToken } = useAuthStore()

  return useMutation({
    mutationFn: async (code: string) => {
      const credentials: AuthTokenProviderResponse = await authApiService.getAuthToken(
        'google',
        code,
      )
      const authResponse: AuthToken = await authApiService.loginCallback('google', {
        idToken: credentials.id_token,
      })
      setToken(authResponse.accessToken)
      const authUser: User = await authApiService.getProfile()
      setUser(authUser)
      return authUser
    },
    onSuccess: () => {
      const redirect = searchParams.get('redirect')
      if (redirect) {
        navigate(redirect, { replace: true })
      } else {
        navigate(ROUTE_PATHS.DASHBOARD, { replace: true })
      }
    },
  })
}

export const useLogout = () => {
  const navigate = useNavigate()
  const { setToken, setUser, setTempUser } = useAuthStore()

  return useMutation({
    mutationFn: async () => {
      await authApiService.logout()
    },
    onSettled: () => {
      setToken(null)
      setUser(null)
      setTempUser(null)
      navigate(ROUTE_PATHS.AUTH.LOGIN, { replace: true })
    },
  })
}

export const useProfile = () => {
  return useQuery<User>({
    queryKey: ['profile'],
    queryFn: () => authApiService.getProfile(),
  })
}

export const useVerifyEmailWithToken = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: async (token: string) => {
      await authApiService.verifyEmail({ token })
    },
    onSuccess: () => {
      reporter.success('Email Verified Successfully')
      navigate(ROUTE_PATHS.AUTH.LOGIN, { replace: true })
    },
    onError: () => {
      navigate(ROUTE_PATHS.AUTH.LOGIN, { replace: true })
    },
  })
}

export const useVerifyEmailWithCode = () => {
  const navigate = useNavigate()
  const { setUser, setToken } = useAuthStore()

  return useMutation({
    mutationFn: async (payload: { code: string; email?: string }) => {
      const authToken: AuthTokenResponse = await authApiService.verifyEmailWithCode(payload)
      setToken(authToken.accessToken)
      const authUser: User = await authApiService.getProfile()
      setUser(authUser)
      return { authToken, authUser }
    },
    onSuccess: () => {
      reporter.success('Email Verified Successfully')
      navigate(ROUTE_PATHS.DASHBOARD, { replace: true })
    },
  })
}

export const useResendVerificationEmail = () => {
  return useMutation({
    mutationFn: async (email: string) => {
      await authApiService.resendVerificationEmail({ email })
    },
  })
}
