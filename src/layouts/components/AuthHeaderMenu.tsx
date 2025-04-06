'use client'

import { InternalLink as Link } from '@/components/common/InternalLink'
import { Button } from '@/components/ui/button'
import { ROUTE_PATHS } from '@/constants/path'
import { useAuth } from '@/contexts/AuthContext'
import { useEffect, useState } from 'react'
import { DropdownUser } from './DropdownUser'

export function AuthHeaderMenu() {
  const { user } = useAuth()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return <div className=""></div>

  return (
    <>
      {user ? (
        <DropdownUser />
      ) : (
        <>
          <Link href={ROUTE_PATHS.AUTH.LOGIN}>
            <Button variant="secondary">Sign in</Button>
          </Link>
          <Link href={ROUTE_PATHS.AUTH.SIGNUP}>
            <Button>Sign up</Button>
          </Link>
        </>
      )}
    </>
  )
}
