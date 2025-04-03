import { InternalLink } from '@/components/common/InternalLink'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { InputField } from '@/components/ui/input-field'
import { AUTH_CONFIG } from '@/constants/auth'
import { ROUTE_PATHS } from '@/constants/path'
import authApiService from '@/features/auth/services/authApiService'
import { setFormErrorsFromApi } from '@/lib/form-utils'
import reporter from '@/lib/reporter'
import { ErrorType } from '@/types/common'
import { zodResolver } from '@hookform/resolvers/zod'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { z } from 'zod'
import { useAuthStore } from '../store/authStore'
import { AuthTokenResponse, User } from '../types'
import { loginSchema } from '../validations'
import { LoginGoogle } from './LoginGoogle'

export function LoginForm() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [loading, setLoading] = useState({ submit: false })
  const { setUser, setToken } = useAuthStore()

  type LoginFormValues = z.infer<typeof loginSchema>

  const form = useForm<LoginFormValues>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const {
    handleSubmit,
    // register,
    // watch,
    // clearErrors,
    formState: { },
  } = form

  const onSubmit = async (data: LoginFormValues) => {
    console.log('xxx')
    if (loading.submit) return
    setLoading({ ...loading, submit: true })
    try {
      const payload = {
        email: data.email,
        password: data.password,
      }
      const authToken: AuthTokenResponse = await authApiService.login(payload)
      setToken(authToken.accessToken)
      const authUser: User = await authApiService.getProfile()
      setUser(authUser)
      const redirect = searchParams.get('redirect')
      if (redirect) {
        navigate(redirect, { replace: true })
      } else {
        navigate(ROUTE_PATHS.DASHBOARD, { replace: true })
      }
    } catch (error) {
      if (!setFormErrorsFromApi(form, error)) reporter.error(error as ErrorType)
    } finally {
      setLoading({ ...loading, submit: false })
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputField
            label="Email"
            name="email"
            type="email"
            control={form.control}
            placeholder="Enter your email"
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            control={form.control}
            placeholder="Enter your password"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                  Remember me
                </label>
              </div>
            </div>
            <InternalLink
              href="/"
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot password?
            </InternalLink>
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">OR</p>
          </div>

          <div className="">
            <GoogleOAuthProvider clientId={AUTH_CONFIG.google.clientId as string}>
              <LoginGoogle />
            </GoogleOAuthProvider>
          </div>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don't have an account yet?{' '}
            <InternalLink
              href={ROUTE_PATHS.AUTH.LOGIN}
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </InternalLink>
          </p>
        </form>
      </Form>
    </>
  )
}
