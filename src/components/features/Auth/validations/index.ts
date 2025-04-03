import { z } from 'zod'

export const authValidation = {
  signup: z.object({
    email: z.string({ message: 'Email is required' }).email('This email is invalid'),
    name: z.string({ message: 'Name is required' }),
    password: z
      .string({ message: 'This field is required' })
      .min(6, 'Password must be at least 6 characters long'),
  }),
  login: z.object({
    email: z.string({ message: 'Email is required' }).email('This email is invalid'),
    password: z.string({ message: 'This field is required' }),
  }),
}
