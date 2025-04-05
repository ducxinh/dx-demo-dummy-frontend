import Logo from '@/assets/images/logo/logo.svg'
import { ArrowLeftIcon } from '@/components/icons/ArrowLeftIcon'
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import { DashboardIcon } from '@/components/icons/Dashboard'
import { cn } from '@/lib/utils'
import { Fragment, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { menusItems } from './data'
import './index.css'
import { MenuItem } from './MenuItem'
import { MenuItemNested } from './MenuItemNested'

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (arg: boolean) => void
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const trigger = useRef<HTMLButtonElement>(null)
  const sidebar = useRef<HTMLDivElement>(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return
      if (!sidebarOpen || sidebar.current.contains(target as Node) || trigger.current.contains(target as Node))
        return
      // setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  return (
    <aside
      ref={sidebar}
      className={cn(
        {
          'absolute left-0 top-0 z-9999 flex h-screen flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0':
            true,
          'w-72.5': !!sidebarOpen,
          'w-20': !sidebarOpen,
        },
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block _lg:hidden"
        >
          {sidebarOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3
              className={cn('mb-4 text-sm font-semibold text-bodydark2 hidden', {
                'ml-4': !!sidebarOpen,
              })}
            >
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {menusItems.map(({ label, to, menuIcon, items }) => (
                <Fragment key={label}>
                  {items && items.length > 0 ? (
                    <MenuItemNested
                      basePath={to || '/'}
                      sidebarOpen={sidebarOpen}
                      setSidebarOpen={setSidebarOpen}
                      label={label}
                      menuIcon={menuIcon || <DashboardIcon />}
                      subItems={items}
                    />
                  ) : (
                    <li>
                      <MenuItem
                        label={label}
                        to={to}
                        menuIcon={menuIcon || <DashboardIcon />}
                        sidebarOpen={sidebarOpen}
                      />
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  )
}

export default Sidebar
