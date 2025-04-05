import { ROUTE_PATHS } from '@/constants/path'
import { AdminHome } from '@/pages/Admin/Home'
import { RouteItem } from '@/routes/type'

const adminRoutes: RouteItem[] = [
  {
    path: ROUTE_PATHS.ADMIN.INDEX,
    element: <AdminHome />,
  },
  // ...USER_ROUTES,
]

export default adminRoutes
