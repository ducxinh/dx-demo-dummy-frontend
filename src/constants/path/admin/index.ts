import { ADMIN_ROUTE_TEMPLATE_PATHS } from './sample'

export const ADMIN_ROUTE_PATHS = {
  INDEX: '/admin',
  DASHBOARD: '/admin/dashboard',
  PROFILE: '/admin/profile',
  ...ADMIN_ROUTE_TEMPLATE_PATHS,
  USER: {
    INDEX: '/admin/user',
    CREATE: '/admin/user/create',
    DETAIL: '/admin/user/:userId',
    EDIT: '/admin/user/:userId/edit',
  },
  POST: {
    INDEX: '/admin/post',
    CREATE: '/admin/post/create',
    DETAIL: '/admin/post/:postId',
    EDIT: '/admin/post/:postId/edit',
  },
  TAG: {
    INDEX: '/admin/tag',
    CREATE: '/admin/tag/create',
    DETAIL: '/admin/tag/:tagId',
    EDIT: '/admin/tag/:tagId/edit',
  },
  CATEGORY: {
    INDEX: '/admin/category',
    CREATE: '/admin/category/create',
    DETAIL: '/admin/category/:categoryId',
    EDIT: '/admin/category/:categoryId/edit',
  },
  FILE: {
    INDEX: '/admin/file',
    CREATE: '/admin/file/create',
    DETAIL: '/admin/file/:fileId',
    EDIT: '/admin/file/:fileId/edit',
  },
  EMPLOYEE: {
    INDEX: '/admin/employee',
    CREATE: '/admin/employee/create',
    DETAIL: '/admin/employee/:employeeId',
    EDIT: '/admin/employee/:employeeId/edit',
  },
}
