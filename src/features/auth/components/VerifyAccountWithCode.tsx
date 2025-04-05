'use client'

import { Image } from '@/components/common/Image'
import { InternalLink } from '@/components/common/InternalLink'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { InputField } from '@/components/ui/input-field'
import { APP_CONFIG } from '@/constants/app'
import { ROUTE_PATHS } from '@/constants/path'
import { useAuthStore } from '@/features/auth/store/authStore'
import { setFormErrorsFromApi } from '@/lib/form-utils'
import { z } from '@/validations/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useResendVerificationEmail, useVerifyEmailWithCode } from '../hooks/useAuth'
import { verificationCodeSchema } from '../validations'

type VerificationFormValues = z.infer<typeof verificationCodeSchema>

export function VerifyAccountWithCode() {
  const { tempUser } = useAuthStore()
  const verifyEmailWithCode = useVerifyEmailWithCode()
  const resendVerificationEmail = useResendVerificationEmail()

  const form = useForm<VerificationFormValues>({
    mode: 'onBlur',
    resolver: zodResolver(verificationCodeSchema),
    defaultValues: {
      code: '',
    },
  })

  const onSubmitCode = async (data: VerificationFormValues) => {
    try {
      await verifyEmailWithCode.mutateAsync({
        code: data.code,
        email: tempUser?.email,
      })
    } catch (error) {
      console.log('error', error)
      if (!setFormErrorsFromApi(form, error)) throw error
    }
  }

  const handleResendEmail = async () => {
    if (!tempUser?.email) return

    try {
      await resendVerificationEmail.mutateAsync(tempUser.email)
    } catch (error) {
      if (!setFormErrorsFromApi(form, error)) throw error
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
              src="/assets/images/logo.png"
              alt="Site logo"
              className="mr-2 h-8 w-8"
              width={50}
              height={50}
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
                  <span className="font-bold">{tempUser?.email}</span>
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
                    />
                    <div className="flex flex-col gap-2">
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={verifyEmailWithCode.isPending}
                      >
                        {verifyEmailWithCode.isPending ? 'Verifying...' : 'Continue'}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={handleResendEmail}
                        disabled={resendVerificationEmail.isPending}
                      >
                        {resendVerificationEmail.isPending ? 'Sending...' : 'Resend Email'}
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
