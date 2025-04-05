import { InternalLink } from '@/components/common/InternalLink'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { InputField } from '@/components/ui/input-field'
import { AUTH_CONFIG } from '@/constants/auth'
import { ROUTE_PATHS } from '@/constants/path'
import { setFormErrorsFromApi } from '@/lib/form-utils'
import reporter from '@/lib/reporter'
import { z } from '@/validations/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useForm } from 'react-hook-form'
import { signupSchema } from '../validations'
import { LoginGoogle } from './LoginGoogle'
import { useSignup } from '../hooks/useAuth'

export function SignupForm() {
  const form = useForm<z.infer<typeof signupSchema>>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const signupMutation = useSignup()

  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
    try {
      await signupMutation.mutateAsync(data)
      reporter.success('Signup successful! Please check your email to verify your account.')
    } catch (error) {
      if (!setFormErrorsFromApi(form, error)) reporter.error(error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Name"
          name="name"
          type="text"
          control={form.control}
          placeholder="Enter your name"
          required={true}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          control={form.control}
          placeholder="Enter your email"
          required={true}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          control={form.control}
          placeholder="Enter your password"
          required={true}
        />
        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          control={form.control}
          placeholder="Confirm your password"
          required={true}
        />

        <Button type="submit" className="w-full" disabled={signupMutation.isPending}>
          {signupMutation.isPending ? 'Signing up...' : 'Sign up'}
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
          Already have an account?{' '}
          <InternalLink
            href={ROUTE_PATHS.AUTH.LOGIN}
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login here
          </InternalLink>
        </p>
      </form>
    </Form>
  )
}
