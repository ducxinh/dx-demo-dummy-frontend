'use client'
import { InternalLink as Link } from '@/components/common/InternalLink'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { InputField } from '@/components/ui/input-field'
import { ROUTE_PATHS } from '@/constants/path'
import { useLoginFirebase } from '@/features/auth/hooks/useAuth'
import { loginSchema } from '@/features/auth/validations'
import { setFormErrorsFromApi } from '@/lib/form-utils'
import reporter from '@/lib/reporter'
import { ErrorType } from '@/types/common'
import { z } from '@/validations/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FirebaseLoginGoogle } from './LoginGoogle'



export function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const loginMutation = useLoginFirebase()

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      await loginMutation.mutateAsync(data)
    } catch (error) {
      if (!setFormErrorsFromApi(form, error)) reporter.error(error as ErrorType)
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
            <Link
              href="/"
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot password?
            </Link>
          </div>
          <Button type="submit" className="w-full" disabled={loginMutation.isPending}>
            {loginMutation.isPending ? 'Logging in...' : 'Login'}
          </Button>
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">OR</p>
          </div>

          <div className="">
            <FirebaseLoginGoogle />
          </div>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don&apos;t have an account yet?{' '}
            <Link
              href={ROUTE_PATHS.AUTH.SIGNUP}
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </Link>
          </p>
        </form>
      </Form>
    </>
  )
}
