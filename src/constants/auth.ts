export enum RoleEnum {
  USER = 'user',
  ADMIN = 'admin',
}

export type VerifyAccountEmailMethod = 'link' | 'code'

export const AUTHENTICATE_TOKEN_KEY = 'NixLoggerIdentityServiceProvider.server.accessToken'
export const AUTHENTICATE_USER_KEY = 'NixLoggerIdentityServiceProvider.server.userData'
export const AUTHENTICATE_TEMP_USER_KEY = 'NixLoggerIdentityServiceProvider.server.tempUser'

export const VERIFY_ACCOUNT_METHOD: VerifyAccountEmailMethod = 'code'

export const AUTH_CONFIG = {
  TOKEN_KEY: import.meta.env.AUTHENTICATE_TOKEN_KEY || AUTHENTICATE_TOKEN_KEY,
  USER_KEY: import.meta.env.AUTHENTICATE_USER_KEY || AUTHENTICATE_USER_KEY,
  TEMP_USER_KEY: import.meta.env.AUTHENTICATE_TEMP_USER_KEY || AUTHENTICATE_TEMP_USER_KEY,
  GOOGLE: {
    CLIENT_ID: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
  },
  isVerifyAccountEmailCodeMethod: () => VERIFY_ACCOUNT_METHOD === 'code',
}
