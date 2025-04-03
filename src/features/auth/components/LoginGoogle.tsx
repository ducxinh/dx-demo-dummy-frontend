import React, { useEffect, useState } from 'react'
// useGoogleOneTapLogin
import { GoogleIcon } from '@/components/icons/GoogleIcon'
import { ROUTE_PATHS } from '@/constants/path'
import authApiService from '@/features/auth/services/authApiService'
import reporter from '@/lib/reporter'
import { useAuthStore } from '@/store/authStore'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'
// import Cookies from 'js-cookie'
import { AuthToken, AuthTokenProviderResponse, User } from '@/features/auth/types'
import { useNavigate, useSearchParams } from 'react-router-dom'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactElement | React.ReactElement[] | string | number
}

// useOneTap: hiển thị right popup list profile để login bằng cách tap vào popup
export function LoginGoogle(props: SectionProps) {
  const { className, ...rest } = props
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [authGoogleUrl, setAuthGoogleUrl] = useState('')
  const { setUser, setToken } = useAuthStore()

  useEffect(() => {
    setAuthGoogleUrl(authApiService.getSocialLoginUrl('google'))
  }, [])

  const resolveClass = () => {
    const classList = ['block', className || '']
    return classList.join(' ')
  }

  const handleGetGoogleToken = async (code: string) => {
    try {
      const credentials: AuthTokenProviderResponse = await authApiService.getAuthToken(
        'google',
        code,
      )
      const authResponse: AuthToken = await authApiService.loginCallback('google', {
        idToken: credentials.id_token,
      })
      const authToken: AuthToken = authResponse as AuthToken
      setToken(authToken.accessToken)
      const authUser: User = await authApiService.getProfile()
      setUser(authUser)
      const redirect = searchParams.get('redirect')
      if (redirect) {
        navigate(redirect)
      } else {
        navigate(ROUTE_PATHS.DASHBOARD)
      }
    } catch (error) {
      reporter.error(error)
      console.error('Navigation failed:', error)
    }
  }

  // todo define types
  const handleResponseAuthFlow = (tokenResponse: { code: string }) => {
    handleGetGoogleToken(tokenResponse.code)
  }

  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: (tokenResponse) => handleResponseAuthFlow(tokenResponse),
  })

  const usingPopupWindow = true

  const showNativeLoginButton = false

  return (
    <div {...rest} className={resolveClass()}>
      {showNativeLoginButton && (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse)
          }}
          onError={() => {
            console.log('Login Failed')
          }}
        />
      )}

      {usingPopupWindow ? (
        <div className="">
          <button
            className="text-dark flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-center text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={() => login()}
            type="button"
          >
            <GoogleIcon />
            Sign in with Google
          </button>
        </div>
      ) : (
        <div className="">
          <a
            className="text-dark flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-center text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            href={authGoogleUrl}
          >
            <GoogleIcon />
            Sign in with Google
          </a>
        </div>
      )}
    </div>
  )
}
