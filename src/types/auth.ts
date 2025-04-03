import { User } from '@/features/auth/types'

export type AuthTokenCredentials = {
  access_token?: string
  refresh_token?: string
  scope?: string
  token_type?: string | 'Bearer'
  id_token?: string
  expiry_date?: number
}

export type AuthToken = {
  refreshToken: string
  accessToken: string
  tokenExpires: string
  tokenType?: string | 'Bearer'
  user: User
}

export type UserProfile = {
  id: string
  email: string
  name: string
  // Add other user properties as needed
}
