import { Avatar } from '@/components/common/Avatar'
import { ROUTE_PATHS } from '@/constants/path'
import { useAuth } from '@/contexts/AuthContext'
import { useAuthStore } from '@/features/auth/store/authStore'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function DropdownUser() {
  const auth = useAuth()
  const { user } = useAuthStore()
  const navigate = useNavigate()
  const menuItems = [
    // { id: 1, label: 'Admin', path: ROUTE_PATHS.ADMIN.INDEX },
    // { id: 2, label: 'Dashboard', path: ROUTE_PATHS.DASHBOARD },
    { id: 1, label: 'My Account', path: ROUTE_PATHS.ACCOUNT},
  ]
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <Avatar
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
        <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-box shadow-lg ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <MenuItem>
              <Link to={ROUTE_PATHS.ACCOUNT}>
                <div className="flex gap-2 mb-2 items-center">
                  <Avatar
                    src="https://gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=80&amp;d=mp"
                    alt="ducxinh"
                  />
                  {user?.name}
                </div>
              </Link>
            </MenuItem>

            {menuItems.map((menuItem) => (
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
