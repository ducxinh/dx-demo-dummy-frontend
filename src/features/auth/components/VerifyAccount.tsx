'use client'
import { Image } from '@/components/common/Image'
import { InternalLink } from '@/components/common/InternalLink'
import { Button } from '@/components/ui/button'
import { APP_CONFIG } from '@/constants/app'
import { AUTH_CONFIG } from '@/constants/auth'
import { ROUTE_PATHS } from '@/constants/path'
import { useAuthStore } from '@/features/auth/store/authStore'
import { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useVerifyEmailWithToken } from '../hooks/useAuth'
import { VerifyAccountWithCode } from './VerifyAccountWithCode'

export function VerifyAccount() {
  const navigate = useNavigate()
  const { code } = useParams()
  const { tempUser } = useAuthStore()
  const verifyEmailWithToken = useVerifyEmailWithToken()
  const token = code


  useEffect(() => {
    if (token) {
      verifyEmailWithToken.mutate(token)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])
  
  if (!token && !tempUser) {
    return <Navigate to={ROUTE_PATHS.AUTH.LOGIN} replace />
  }

  // If no token is provided and it's the code-based method, show the code entry form
  if (!token && AUTH_CONFIG.isVerifyAccountEmailCodeMethod()) {
    return <VerifyAccountWithCode />
  }

  // If no token is provided and it's not the code-based method, show the instructions
  return (
    <div className="">
      <section className="bg-gray-50 dark:bg-gray-900 py-6">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto _md:h-screen lg:py-0">
          <InternalLink
            href={ROUTE_PATHS.HOME}
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image
              className="w-8 h-8 mr-2 rounded"
              src="/static/images/logo.png"
              alt="logo"
              width={32}
              height={32}
            />
            {APP_CONFIG.appName}
          </InternalLink>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Verify your account
              </h1>
              <div className="text-center space-y-4">
                <p className="dark:text-white">
                  We&apos;ve sent a verification link to your email: <br />
                  <span className="font-bold">{tempUser?.email}</span>
                </p>
                <p className="dark:text-white">
                  Please check your email and click on the verification link to complete the account
                  setup.
                </p>
                <Button onClick={() => navigate(ROUTE_PATHS.AUTH.LOGIN)} className="w-full mt-4">
                  Go to Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
