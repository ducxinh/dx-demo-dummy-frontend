import { ErrorPage } from '@/components/common/ErrorPage';
import { ROUTE_PATHS } from '@/constants/path';
import { AuthGuard } from '@/guards/Auth';
import { AuthRedirect } from '@/guards/AuthRedirect';
import AdminLayout from '@/layouts/admin/AdminLayout';
import { About } from '@/pages/About/Loadable';
import { Dashboard } from '@/pages/Dashboard/Loadable';
import EmailVerificationPage from '@/pages/EmailVerification';
import { HomePage } from '@/pages/Home';
import LoginPage from '@/pages/Login';
import SignupPage from '@/pages/Signup';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

// Layouts
const MainLayout = lazy(() => import('@/layouts/MainLayout'));
const AuthLayout = lazy(() => import('@/layouts/AuthLayout'));

// Pages
// const Home = lazy(() => import('@/routes/Home'));
// const Login = lazy(() => import('@/routes/Login'));
// const NotFound = lazy(() => import('@/routes/NotFound'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

// Wrapper for lazy loaded components
const LazyLoad = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
);

const parseRoutes = (routeItems: RouteObject[]) => {
  return routeItems.map(adminRoute => {
    const { element: Element, children, ...rest } = adminRoute
    const childrenItems: any[] = children ? parseRoutes(children) : []
    return {
      ...rest,
      element: Element && (
        <LazyLoad>
          {Element}
        </LazyLoad>
      ),
      children: childrenItems,
    }
  })
}

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
      {
        path: ROUTE_PATHS.DASHBOARD,
        element: (
          <AuthGuard>
            <Dashboard />
          </AuthGuard>
        ),
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
      // ...parseRoutes(adminRoutes)
    ],
  },

  // {
  //   errorElement: <ErrorPage />,
  //   path: '/',
  //   element: (
  //     <LazyLoad>
  //       <MainLayout />
  //     </LazyLoad>
  //   ),
  //   children: [
  //     {
  //       index: true,
  //       element: (
  //         <LazyLoad>
  //           <Home />
  //         </LazyLoad>
  //       ),
  //     },
  //     // Add more routes here
  //   ],
  // },
  // {
  //   path: '/auth',
  //   element: (
  //     <LazyLoad>
  //       <AuthLayout />
  //     </LazyLoad>
  //   ),
  //   children: [
  //     {
  //       path: 'login',
  //       element: (
  //         <LazyLoad>
  //           <Login />
  //         </LazyLoad>
  //       ),
  //     },
  //     // Add more auth routes here
  //   ],
  // },
  // {
  //   path: ROUTE_PATHS.AUTH.SIGNUP,
  //   element: <SignupPage />,
  // },
  // {
  //   path: ROUTE_PATHS.AUTH.LOGIN,
  //   element: <LoginPage />,
  // },
  // {
  //   path: ROUTE_PATHS.ABOUT,
  //   element: <About />,
  // },
  // {
  //   path: ROUTE_PATHS.DASHBOARD,
  //   element: (
  //     <AuthGuard>
  //       <Dashboard />
  //     </AuthGuard>
  //   ),
  // },

  // {
  //   path: '/404',
  //   element: (
  //     <LazyLoad>
  //       <NotFound />
  //     </LazyLoad>
  //   ),
  // },
  // {
  //   path: '*',
  //   element: <Navigate to="/404" replace />,
  // },
];

// Create router instance
export const router = createBrowserRouter(routes); 