import { DashboardIcon } from '@/components/icons/Dashboard'
import { ProfileIcon } from '@/components/icons/ProfileIcon'
import { SettingsIcon } from '@/components/icons/SettingsIcon'
import { ROUTE_PATHS } from '@/constants/path'
import { FiFileText, FiFolder, FiTag, FiUsers } from 'react-icons/fi'
import { templateMenusItems } from './template'
import { IMenuItem } from '@/types/Layout'

export const menusItems: IMenuItem[] = [
  { label: 'Dashboard', to: ROUTE_PATHS.ADMIN.INDEX, menuIcon: <DashboardIcon />, items: [] },
  { label: 'Profile', to: ROUTE_PATHS.ADMIN.PROFILE, menuIcon: <ProfileIcon />, items: [] },
  { label: 'Employee', to: ROUTE_PATHS.ADMIN.EMPLOYEE.INDEX, menuIcon: <FiUsers />, items: [] },
  {
    label: 'Settings',
    to: ROUTE_PATHS.ADMIN.PAGES.SETTINGS,
    menuIcon: <SettingsIcon />,
    items: [],
  },
  { label: 'Post', to: ROUTE_PATHS.ADMIN.POST.INDEX, menuIcon: <FiFileText />, items: [] },
  { label: 'Category', to: ROUTE_PATHS.ADMIN.CATEGORY.INDEX, menuIcon: <FiTag />, items: [] },
  { label: 'Tag', to: ROUTE_PATHS.ADMIN.TAG.INDEX, menuIcon: <FiTag />, items: [] },
  { label: 'User', to: ROUTE_PATHS.ADMIN.USER.INDEX, menuIcon: <FiUsers /> },
  { label: 'File', to: ROUTE_PATHS.ADMIN.FILE.INDEX, menuIcon: <FiFolder />, items: [] },
  ...templateMenusItems,
]
