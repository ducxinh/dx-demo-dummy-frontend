import { cn } from '@/lib/utils'
import { Link, useLocation } from 'react-router-dom'

interface MenuItemProps {
  label: string
  to: string
  menuIcon: any
  basePath?: string
  sidebarOpen?: boolean
}

export function MenuItem({ label, to = '', menuIcon, sidebarOpen = true }: MenuItemProps) {
  const location = useLocation()
  const pathname = location.pathname
  return (
    <>
      <Link
        to={to}
        className={cn(
          'group relative flex items-center gap-2.5 py-2 rounded-sm font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4',
          {
            'bg-graydark dark:bg-meta-4': pathname.includes(to),
            'px-4': !!sidebarOpen,
          },
        )}
      >
        {menuIcon}
        {sidebarOpen && label}
      </Link>
    </>
  )
}
