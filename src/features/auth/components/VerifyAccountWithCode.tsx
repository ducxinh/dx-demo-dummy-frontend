import { InternalLink } from '@/components/common/InternalLink'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { InputField } from '@/components/ui/input-field'
import { APP_CONFIG } from '@/constants/app'
import { ROUTE_PATHS } from '@/constants/path'
import authApiService from '@/features/auth/services/authApiService'
import reporter from '@/lib/reporter'
import { useAuthStore } from '@/store/authStore'
import { setFormErrorsFromApi } from '@/lib/form-utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Image } from '@/components/common/Image'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { AuthTokenResponse, User } from '../types'
import { verificationCodeSchema } from '../validations'

type VerificationFormValues = z.infer<typeof verificationCodeSchema>

export function VerifyAccountWithCode() {
  const navigate = useNavigate()
  const { user, setUser, setToken } = useAuthStore()

  const [loading, setLoading] = useState({
    submit: false,
    resend: false,
  })

  const form = useForm<VerificationFormValues>({
    mode: 'onBlur',
    resolver: zodResolver(verificationCodeSchema),
    defaultValues: {
      code: '',
    },
  })

  const onSubmitCode = async (data: VerificationFormValues) => {
    if (loading.submit) return
    setLoading((prev) => ({ ...prev, submit: true }))
    try {
      const payload = {
        code: data.code,
        email: user?.email,
      }
      const authToken: AuthTokenResponse = await authApiService.verifyEmailWithCode(payload)
      setToken(authToken.accessToken)
      const authUser: User = await authApiService.getProfile()
      setUser(authUser)
      reporter.success('Email Verified Successfully')
      navigate(ROUTE_PATHS.DASHBOARD)
    } catch (error) {
      if (!setFormErrorsFromApi(form, error)) reporter.error(error)
    } finally {
      setLoading((prev) => ({ ...prev, submit: false }))
    }
  }

  const handleResendEmail = async () => {
    if (loading.resend || !user?.email) return
    setLoading((prev) => ({ ...prev, resend: true }))
    try {
      await authApiService.resendVerificationEmail({
        email: user.email,
      })
    } catch (error) {
      reporter.error(error)
    } finally {
      setLoading((prev) => ({ ...prev, resend: false }))
    }
  }

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
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Verify your account
              </h1>
              <div className="space-y-4">
                <p className="dark:text-white text-center">
                  Enter the verification code we just sent to <br />
                  <span className="font-bold">{user?.email}</span>
                </p>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmitCode)} className="space-y-4">
                    <InputField
                      label="Verification Code"
                      name="code"
                      type="text"
                      control={form.control}
                      placeholder="Enter 6-digit code"
                      required={true}
                    // maxLength={6}
                    />
                    <div className="flex flex-col gap-2">
                      <Button type="submit" className="w-full" disabled={loading.submit}>
                        {loading.submit ? 'Verifying...' : 'Continue'}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={handleResendEmail}
                        disabled={loading.resend}
                      >
                        {loading.resend ? 'Sending...' : 'Resend Email'}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
