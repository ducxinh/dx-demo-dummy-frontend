import { RoleEnum } from '@/constants/auth'

export type LoginPayload = {
  email: string
  password: string
}

export type SignupPayload = {
  name: string
  email: string
  password: string
}

export type AuthTokenResponse = {
  accessToken: string
  tokenType: string
}

export type User = {
  id?: number
  uid?: string
  name: string // displayName
  displayName: string
  username: string
  email: string
  emailVerifiedAt?: string
  passwordChangedAt?: string
  firstName: string
  lastName: string
  active: boolean
  provider?: string
  socialId?: string
  role: RoleEnum
  dob?: string
  gender?: string
  timezone?: string
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
  avatar?: string
  // photoURL
  // phoneNumber
  // createdAt
  // lastLogin
}

export type AuthTokenProviderResponse = {
  access_token: string
  refresh_token: string
  scope: string
  token_type: string
  id_token: string
  expiry_date: string
}

export type AuthToken = {
  accessToken: string
  refreshToken: string
  tokenExpires: number
  user: User
}
