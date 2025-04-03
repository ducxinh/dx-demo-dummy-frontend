import { ROUTE_PATHS } from '@/constants/path'
import { Menu, MenuButton, MenuItem, MenuItems,Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

export function AccountMenu() {
  const auth = useAuth()
  const navigate = useNavigate()
  const menuItems = [
    { id: 1, label: 'Admin', path: ROUTE_PATHS.ADMIN.INDEX },
    { id: 2, label: 'Dashboard', path: ROUTE_PATHS.DASHBOARD },
    { id: 3, label: 'Profile', path: ROUTE_PATHS.DASHBOARD },
  ]
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <img
            className="c-avatar-img w-10 h-10 inline-block rounded-full"
            src="https://gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=80&amp;d=mp"
            alt="ducxinh"
          />
        </MenuButton>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-box shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {menuItems.map(menuItem => (
              <MenuItem key={menuItem.id}>
                {({ active }) => (
                  <Link to={menuItem.path}>
                    <button
                      className={`${active ? 'bg-primary text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {menuItem.label}
                    </button>
                  </Link>
                )}
              </MenuItem>
            ))}
            <MenuItem>
              {({ active }) => (
                <button
                  onClick={() =>
                    auth.onSignOut(() => {
                      navigate(ROUTE_PATHS.AUTH.LOGIN)
                    })
                  }
                  className={`${active ? 'bg-primary text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Logout
                </button>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}
