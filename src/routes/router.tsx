import { ErrorPage } from '@/components/common/ErrorPage'
import { ROUTE_PATHS } from '@/constants/path'
import { AuthGuard } from '@/guards/AuthGuard'
import { AuthRedirect } from '@/guards/AuthRedirect'
import AdminLayout from '@/layouts/admin/AdminLayout'
import MainLayout from '@/layouts/MainLayout'
import { About } from '@/pages/About/Loadable'
import { Dashboard } from '@/pages/Dashboard/Loadable'
import EmailVerificationPage from '@/pages/EmailVerification'
import { HomePage } from '@/pages/Home'
import LoginPage from '@/pages/Login'
import SignupPage from '@/pages/Signup'
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'
import adminRoutes from './admin'

// Route configuration
export const routes: RouteObject[] = [
  {
    errorElement: <ErrorPage />,
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <AuthRedirect>
            <HomePage />
          </AuthRedirect>
        ),
      },
      {
        path: ROUTE_PATHS.AUTH.SIGNUP,
        element: <SignupPage />,
      },
      {
        path: ROUTE_PATHS.AUTH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTE_PATHS.AUTH.VERIFY_ACCOUNT,
        element: <EmailVerificationPage />,
      },
      {
        path: ROUTE_PATHS.ABOUT,
        element: <About />,
      },
    ],
  },
  {
    path: '/',
    element: (
      <AuthGuard>
        <AdminLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: ROUTE_PATHS.DASHBOARD,
        element: <Dashboard />,
      },
      ...adminRoutes,
    ],
  },
  {
    path: '/404',
    element: <ErrorPage />,
  },
  {
    path: '*',
    element: <Navigate to="/404" replace />,
  },
]

export const router = createBrowserRouter(routes)
