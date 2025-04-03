import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import SidebarLinkGroup from '../SidebarLinkGroup'
import { DropdownIcon } from '@/components/icons/DropdownIcon'
import NavLink from '@/components/common/NavLink'
import { cn } from '@/lib/utils'

interface MenuSubItem {
  label: string
  to: string
  menuIcon?: any
}
interface MenuItemProps {
  basePath?: string
  sidebarOpen: boolean
  setSidebarOpen: (value: boolean) => void
  menuIcon: any
  label: string
  subItems: MenuSubItem[]
}

export function MenuItemNested({
  basePath = '',
  sidebarOpen,
  setSidebarOpen,
  menuIcon,
  label,
  subItems,
}: MenuItemProps) {
  const location = useLocation()
  const pathname = location.pathname
  return (
    <>
      {/* <!-- Menu Item Forms --> */}
      <SidebarLinkGroup activeCondition={pathname === `${basePath}` || pathname.includes(basePath)}>
        {(handleClick, open) => {
          return (
            <React.Fragment>
              <Link
                to="#"
                className={cn(
                  `group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    ((pathname === basePath || pathname.includes(basePath)) &&
                      'bg-graydark dark:bg-meta-4',
                    {
                      'px-4': !!sidebarOpen,
                    })
                  }`,
                )}
                onClick={e => {
                  e.preventDefault()
                  sidebarOpen ? handleClick() : setSidebarOpen(true)
                }}
              >
                {menuIcon}
                {sidebarOpen && label}
                <DropdownIcon open={open} />
              </Link>
              {/* <!-- Dropdown Menu Start --> */}
              <div className={`translate transform overflow-hidden ${!open && 'hidden'}`}>
                <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                  {subItems.map(subItem => (
                    <li key={`${subItem.label}_${subItem.to}`}>
                      <NavLink
                        href={subItem.to}
                        className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white"
                        activeClassName="!text-white"
                      >
                        {subItem.menuIcon && <>{subItem.menuIcon}</>}
                        {subItem.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <!-- Dropdown Menu End --> */}
            </React.Fragment>
          )
        }}
      </SidebarLinkGroup>
    </>
  )
}
