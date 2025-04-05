import { ROUTE_PATHS } from '@/constants/path'
import { useAuthStore } from '@/store/authStore'
import { JSX } from 'react'
import { Navigate } from 'react-router-dom'

export function AuthGuard({ children }: { children: JSX.Element }) {
  const { user } = useAuthStore()

  if (!user) {
    return <Navigate to={ROUTE_PATHS.AUTH.LOGIN} replace />
  }

  return children
}
