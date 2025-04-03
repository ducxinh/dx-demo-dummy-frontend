import { ROUTE_PATHS } from '@/constants/path'
import { useAuth } from '@/contexts/AuthContext'
import { JSX } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export function AuthRedirect({ children }: { children: JSX.Element }) {
  const auth = useAuth()
  const location = useLocation()

  const REDIRECT = true

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={ROUTE_PATHS.AUTH.LOGIN} state={{ from: location }} replace />
  } else {
    return REDIRECT ? (
      <Navigate to={ROUTE_PATHS.ADMIN.INDEX} state={{ from: location }} replace />
    ) : (
      children
    )
  }
}
