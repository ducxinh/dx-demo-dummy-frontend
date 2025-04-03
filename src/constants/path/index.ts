import { ADMIN_ROUTE_PATHS } from './admin'

export const ROUTE_PATHS = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  ABOUT: '/about',
  AUTH: {
    LOGIN: '/login',
    LOGIN_CALLBACK: '/auth/login/callback',
    SIGNUP: '/signup',
    VERIFY_ACCOUNT: '/verify-account',
    // verifyAccount: '/email-verification',
  },
  NOTFOUND: '*',
  ERROR: '/error',
  ADMIN: ADMIN_ROUTE_PATHS,
}
