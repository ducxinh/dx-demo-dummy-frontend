import React, { useEffect, useState } from 'react'
// useGoogleOneTapLogin
import { GoogleIcon } from '@/components/icons/GoogleIcon'
import authApiService from '@/features/auth/services/authApiService'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'
// import Cookies from 'js-cookie'
import { useGoogleLogin as useGoogleLoginHook } from '../hooks/useAuth'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactElement | React.ReactElement[] | string | number
}

// useOneTap: hiển thị right popup list profile để login bằng cách tap vào popup
export function LoginGoogle(props: SectionProps) {
  const { className, ...rest } = props
  const [authGoogleUrl, setAuthGoogleUrl] = useState('')
  const googleLoginMutation = useGoogleLoginHook()

  useEffect(() => {
    setAuthGoogleUrl(authApiService.getSocialLoginUrl('google'))
  }, [])

  const resolveClass = () => {
    const classList = ['block', className || '']
    return classList.join(' ')
  }

  // todo define types
  const handleResponseAuthFlow = (tokenResponse: { code: string }) => {
    googleLoginMutation.mutate(tokenResponse.code)
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
            disabled={googleLoginMutation.isPending}
          >
            <GoogleIcon />
            {googleLoginMutation.isPending ? 'Signing in...' : 'Sign in with Google'}
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
