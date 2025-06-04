import { ADMIN_ROUTE_PATHS } from './admin'

export const ROUTE_PATHS = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  ACCOUNT: '/account',
  ABOUT: '/about',
  TODO_LIST: '/todo-list',
  ECOMMERCE: {
    INDEX: '/ecommerce',
  },
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
