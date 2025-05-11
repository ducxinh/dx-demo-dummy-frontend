export enum RoleEnum {
  USER = 'user',
  ADMIN = 'admin',
}

export type VerifyAccountEmailMethod = 'link' | 'code'

export const AUTHENTICATE_TOKEN_KEY = 'NixLoggerIdentityServiceProvider.server.accessToken'
export const AUTHENTICATE_USER_KEY = 'NixLoggerIdentityServiceProvider.server.userData'
export const AUTHENTICATE_TEMP_USER_KEY = 'NixLoggerIdentityServiceProvider.server.tempUser'

export const VERIFY_ACCOUNT_METHOD: VerifyAccountEmailMethod = 'code'
// export const USE_FIREBASE_AUTH = import.meta.env.VITE_USE_FIREBASE_AUTH === 'true'
export const USE_FIREBASE_AUTH = 'true'
// allow signup and login without email verification
export const ALLOW_SIGNUP_WITHOUT_EMAIL_VERIFICATION =
  import.meta.env.VITE_ALLOW_SIGNUP_WITHOUT_EMAIL_VERIFICATION === 'true'

export const AUTH_CONFIG = {
  TOKEN_KEY: import.meta.env.AUTHENTICATE_TOKEN_KEY || AUTHENTICATE_TOKEN_KEY,
  USER_KEY: import.meta.env.AUTHENTICATE_USER_KEY || AUTHENTICATE_USER_KEY,
  TEMP_USER_KEY: import.meta.env.AUTHENTICATE_TEMP_USER_KEY || AUTHENTICATE_TEMP_USER_KEY,
  GOOGLE: {
    CLIENT_ID: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
  },
  isVerifyAccountEmailCodeMethod: () => VERIFY_ACCOUNT_METHOD === 'code',
}

export const IS_USE_FIREBASE_AUTH = USE_FIREBASE_AUTH === 'true'
