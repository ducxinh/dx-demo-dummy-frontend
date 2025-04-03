import { AuthenticationIcon } from '@/components/icons/AuthenticationIcon'
import { ChartIcon } from '@/components/icons/ChartIcon'
import { FormIcon } from '@/components/icons/FormIcon'
import { PageIcon } from '@/components/icons/PageIcon'
import { TableIcon } from '@/components/icons/TableIcon'
import { TaskIcon } from '@/components/icons/TaskIcon'
import { UIElementIcon } from '@/components/icons/UIElementIcon'
import { ROUTE_PATHS } from '@/constants/path'
import { IMenuItem } from '@/types/Layout'

export const templateMenusItems: IMenuItem[] = [
  { label: 'Chart', to: ROUTE_PATHS.ADMIN.CHART, menuIcon: <ChartIcon />, items: [] },
  { label: 'Tables', to: ROUTE_PATHS.ADMIN.TABLES, menuIcon: <TableIcon />, items: [] },
  { label: 'Task List', to: ROUTE_PATHS.ADMIN.TASK.LIST, menuIcon: <TaskIcon />, items: [] },
  { label: 'Task Kanban', to: ROUTE_PATHS.ADMIN.TASK.KAN_BAN, menuIcon: <TaskIcon />, items: [] },
  {
    label: 'Forms Elements',
    to: ROUTE_PATHS.ADMIN.FORM.FORM_ELEMENTS,
    menuIcon: <FormIcon />,
    items: [],
  },
  {
    label: 'Form Layout',
    to: ROUTE_PATHS.ADMIN.FORM.FORM_LAYOUT,
    menuIcon: <FormIcon />,
    items: [],
  },
  {
    label: 'Pages',
    to: ROUTE_PATHS.ADMIN.PAGES.INDEX,
    menuIcon: <PageIcon />,
    items: [
      {
        label: 'Settings',
        to: ROUTE_PATHS.ADMIN.PAGES.SETTINGS,
      },
      {
        label: 'File Manager',
        to: ROUTE_PATHS.ADMIN.PAGES.FILE_MANAGER,
      },
      {
        label: 'Data Tables',
        to: ROUTE_PATHS.ADMIN.PAGES.DATA_TABLES,
      },
      {
        label: 'Pricing Table',
        to: ROUTE_PATHS.ADMIN.PAGES.PRICING_TABLE,
      },
      {
        label: 'Error Page',
        to: ROUTE_PATHS.ADMIN.PAGES.ERROR_PAGE,
      },
      {
        label: 'Mail Success',
        to: ROUTE_PATHS.ADMIN.PAGES.MAIL_SUCCESS,
      },
      {
        label: 'Messages',
        to: ROUTE_PATHS.ADMIN.PAGES.MESSAGES,
      },
      {
        label: 'Inbox',
        to: ROUTE_PATHS.ADMIN.PAGES.INBOX,
      },
      {
        label: 'Invoice',
        to: ROUTE_PATHS.ADMIN.PAGES.INVOICE,
      },
    ],
  },
  {
    label: 'UI Elements',
    to: ROUTE_PATHS.ADMIN.UI.INDEX,
    menuIcon: <UIElementIcon />,
    items: [
      {
        label: 'Alert',
        to: ROUTE_PATHS.ADMIN.UI.ALERTS,
      },
      {
        label: 'Buttons',
        to: ROUTE_PATHS.ADMIN.UI.BUTTONS,
      },
    ],
  },
  {
    label: 'Authentication',
    to: ROUTE_PATHS.ADMIN.AUTH.INDEX,
    menuIcon: <AuthenticationIcon />,
    items: [
      {
        label: 'Sign In',
        to: ROUTE_PATHS.ADMIN.AUTH.LOGIN,
        menuIcon: <AuthenticationIcon />,
      },
      {
        label: 'Sign Up',
        to: ROUTE_PATHS.ADMIN.AUTH.SIGNUP,
        menuIcon: <AuthenticationIcon />,
      },
      {
        label: 'Reset Password',
        to: ROUTE_PATHS.ADMIN.AUTH.RESET_PASSWORD,
        menuIcon: <AuthenticationIcon />,
      },
    ],
  },
]
