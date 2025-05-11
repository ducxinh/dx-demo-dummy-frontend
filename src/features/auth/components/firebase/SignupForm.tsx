'use client'
import { InternalLink as Link } from '@/components/common/InternalLink'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { InputField } from '@/components/ui/input-field'
import { ROUTE_PATHS } from '@/constants/path'
import { useSignupFirebase } from '@/features/auth/hooks/useAuth'
import { signupSchema } from '@/features/auth/validations'
import { useNavigate } from '@/hooks/useNavigate'
import { setFormErrorsFromApi } from '@/lib/form-utils'
import reporter from '@/lib/reporter'
import { z } from '@/validations/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FirebaseError } from 'firebase/app'
import { useForm } from 'react-hook-form'
import { FirebaseLoginGoogle } from './LoginGoogle'

export function SignupForm() {
  const navigate = useNavigate()
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

  const signupMutation = useSignupFirebase()

  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
    try {
      await signupMutation.mutateAsync(data)
      navigate(ROUTE_PATHS.HOME, { replace: true })
      reporter.success('Signup successful!')
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/email-already-in-use') {
          form.setError('email', { message: 'Email already in use' })
        }
      }
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
          <FirebaseLoginGoogle />
        </div>

        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{' '}
          <Link
            href={ROUTE_PATHS.AUTH.LOGIN}
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login here
          </Link>
        </p>
      </form>
    </Form>
  )
}
