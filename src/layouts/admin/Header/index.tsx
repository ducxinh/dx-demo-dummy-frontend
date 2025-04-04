import { Link } from 'react-router-dom'
import Logo from '@/assets/images/logo/logo-icon.svg'
import DarkModeSwitcher from './DarkModeSwitcher'
import DropdownMessage from './DropdownMessage'
import DropdownNotification from './DropdownNotification'
import DropdownUser from './DropdownUser'
import { SearchIcon } from '@/components/icons/SearchIcon'
import { GlobalSetting } from '@/pages/Admin/Setting/GlobalSetting'

const Header = (props: {
  sidebarOpen: string | boolean | undefined
  setSidebarOpen: (arg0: boolean) => void
}) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-box drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between py-1.5 px-4 md:py-1 md:px-2 shadow-2 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation()
              props.setSidebarOpen(!props.sidebarOpen)
            }}
            className="z-99999 block rounded-sm border border-stroke bg-box p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-box ${
                    !props.sidebarOpen && '!w-full delay-300'
                  }`}
                />
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-box ${
                    !props.sidebarOpen && 'delay-400 !w-full'
                  }`}
                />
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-box ${
                    !props.sidebarOpen && '!w-full delay-500'
                  }`}
                />
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-box ${
                    !props.sidebarOpen && '!h-0 !delay-[0]'
                  }`}
                />
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-box ${
                    !props.sidebarOpen && '!h-0 !delay-200'
                  }`}
                />
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="hidden sm:block">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="relative">
              <button className="absolute top-1/2 left-0 -translate-y-1/2">
                <SearchIcon />
              </button>
              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
              />
              <span className="!hidden ms-auto sm:flex item-center me-1 absolute top-[0px] right-0">
                <kbd
                  className="w-5 h-5 border border-transparent me-1 bg-wash dark:bg-wash-dark text-gray-30 align-middle p-0 inline-flex justify-center items-center text-xs text-center rounded-md"
                  data-platform="mac"
                >
                  ⌘
                </kbd>
                <kbd
                  className="!hidden w-10 h-5 border border-transparent me-1 bg-wash dark:bg-wash-dark text-gray-30 align-middle p-0 _inline-flex justify-center items-center text-xs text-center rounded-md"
                  data-platform="win"
                >
                  Ctrl
                </kbd>
                <kbd className="w-5 h-5 border border-transparent me-1 bg-wash dark:bg-wash-dark text-gray-30 align-middle p-0 inline-flex justify-center items-center text-xs text-center rounded-md">
                  K
                </kbd>
              </span>
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <div className="hidden md:block">
              <GlobalSetting />
            </div>
            {/* <!-- Dark Mode Toggler --> */}
            <DarkModeSwitcher />
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            <DropdownMessage />
            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  )
}

export default Header
