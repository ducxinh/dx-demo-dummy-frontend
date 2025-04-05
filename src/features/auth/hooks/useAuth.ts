import { useMutation, useQuery } from '@tanstack/react-query'
import authApiService from '../services/authApiService'
import { AuthTokenResponse, User } from '../types'
import { useAuthStore } from '../store/authStore'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ROUTE_PATHS } from '@/constants/path'
import { loginSchema } from '../validations'
import { z } from '@/validations/zod'

type LoginPayload = z.infer<typeof loginSchema>

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

export const useLogout = () => {
  const navigate = useNavigate()
  const { setToken, setUser } = useAuthStore()

  return useMutation({
    mutationFn: async () => {
      await authApiService.logout()
    },
    onSuccess: () => {
      setToken(null)
      setUser(null)
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
