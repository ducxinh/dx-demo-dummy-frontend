'use client'

import { ROUTE_PATHS } from '@/constants/path'
import { useAuthStore } from '@/features/auth/store/authStore'
import { useNavigate } from '@/hooks/useNavigate'
import { JSX, useEffect } from 'react'

export function AuthGuard({ children }: { children: JSX.Element }) {
  const navigate = useNavigate()
  const { user } = useAuthStore()

  useEffect(() => {
    if (!user) {
      navigate(ROUTE_PATHS.AUTH.LOGIN, { replace: true })
    }
    // eslint-disable-next-line
  }, [])

  return <>{children}</>
}
