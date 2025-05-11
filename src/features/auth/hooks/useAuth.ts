import { AUTH_CONFIG, IS_USE_FIREBASE_AUTH } from '@/constants/auth'
import { ROUTE_PATHS } from '@/constants/path'
import authApiService from '@/features/auth/services/authApiService'
import { useNavigate } from '@/hooks/useNavigate'
import { useSearchParams } from '@/hooks/useSearchParams'
import reporter from '@/lib/reporter'
import { auth } from '@/services/firebase/firebase'
import { z } from '@/validations/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
  createUserWithEmailAndPassword,
  getIdToken,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  UserCredential,
} from 'firebase/auth'
// import { createUserWithEmailAndPassword, getIdToken, sendEmailVerification } from 'firebase/auth'
import { parseFirebaseUser } from '../lib/auth-helper'
import { useAuthStore } from '../store/authStore'
import { AuthToken, AuthTokenProviderResponse, AuthTokenResponse, User } from '../types'
import { loginSchema, signupSchema } from '../validations'
// import { FirebaseError, getAuth } from 'firebase/auth'

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
        navigate(ROUTE_PATHS.HOME, { replace: true })
      }
    },
  })
}

export const useSignupFirebase = () => {
  const { setUser, setToken } = useAuthStore()

  return useMutation({
    mutationFn: async (data: SignupPayload) => {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
      await updateProfile(userCredential.user, { displayName: data.name })
      const user = userCredential.user
      const token = await getIdToken(user)
      console.log('token', token)
      setToken(token)
      const authUser = parseFirebaseUser(user)
      setUser(authUser)
      return authUser
    },
  })
}

export const useLoginFirebase = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { setUser, setToken } = useAuthStore()

  return useMutation({
    mutationFn: async (data: LoginPayload) => {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
      const user = userCredential.user
      const token = await userCredential.user.getIdToken()
      setToken(token)
      const authUser: User = parseFirebaseUser(user)
      setUser(authUser)
      return authUser
    },
    onSuccess: () => {
      const redirect = searchParams.get('redirect')
      if (redirect) {
        navigate(redirect, { replace: true })
      } else {
        navigate(ROUTE_PATHS.HOME, { replace: true })
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
        navigate(ROUTE_PATHS.HOME, { replace: true })
      }
    },
  })
}

export const useGoogleLoginFirebase = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { setUser, setToken } = useAuthStore()

  return useMutation({
    mutationFn: async (userCredential: UserCredential) => {
      const user = userCredential.user
      const token = await userCredential.user.getIdToken()
      setToken(token)
      const authUser: User = parseFirebaseUser(user)
      setUser(authUser)
      return authUser
    },
    onSuccess: () => {
      const redirect = searchParams.get('redirect')
      if (redirect) {
        navigate(redirect, { replace: true })
      } else {
        navigate(ROUTE_PATHS.HOME, { replace: true })
      }
    },
  })
}

export const useLogout = () => {
  const navigate = useNavigate()
  const { setToken, setUser, setTempUser } = useAuthStore()

  return useMutation({
    mutationFn: async () => {
      if (IS_USE_FIREBASE_AUTH) {
        signOut(auth)
      } else {
        await authApiService.logout()
      }
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
      navigate(ROUTE_PATHS.HOME, { replace: true })
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

export const useGetProfile = () => {
  return useQuery<User>({
    queryKey: ['profile'],
    queryFn: async () => {
      const data = await authApiService.getProfile()
      return data
    },
  })
}

export const useGetMe = () => {
  const { user } = useAuthStore()

  return useQuery<User>({
    queryKey: ['profile'],
    queryFn: async () => {
      if (IS_USE_FIREBASE_AUTH) {
        if (!user) throw new Error('User not found')
        return user
      } else {
        const data = await authApiService.getProfile()
        return data
      }
    },
  })
}
