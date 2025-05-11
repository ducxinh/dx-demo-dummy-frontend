import { ROUTE_PATHS } from '@/constants/path'
import { useAuthStore } from '@/features/auth/store/authStore'
import { JSX } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export function AuthRedirect({ children }: { children: JSX.Element }) {
  const { user } = useAuthStore()
  const location = useLocation()

  const REDIRECT = true

  if (!user) {
    return <Navigate to={ROUTE_PATHS.AUTH.LOGIN} replace />
  } else {
    const TARGET_AUTH_REDIRECT_ROUTE = ROUTE_PATHS.HOME
    return REDIRECT ? (
      <Navigate to={TARGET_AUTH_REDIRECT_ROUTE} state={{ from: location }} replace />
    ) : (
      children
    )
  }
}
