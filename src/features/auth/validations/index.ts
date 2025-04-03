import { z } from '@/validations/zod'

export const signupSchema = z
  .object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    // message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export const loginSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
})

export const verificationCodeSchema = z.object({
  code: z
    .string()
    .trim()
    .length(6, 'The verification code should be exactly 6 characters long')
    .regex(/^[0-9]+$/, 'Code must contain only numbers'),
})
