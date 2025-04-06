'use client'
import { InternalLink } from '@/components/common/InternalLink'
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { ChartBarIcon } from '@heroicons/react/24/outline'
import { Menu, XCircle } from 'lucide-react'
import { Fragment } from 'react'
import { AuthHeaderMenu } from '../AuthHeaderMenu'
import { LogoMenu } from '../LogoMenu'

type MenuItem = {
  title: string
  href?: string
  submenu?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  {
    title: 'Services',
    submenu: [
      { title: 'Web Development', href: '/services/web-development' },
      { title: 'Mobile Apps', href: '/services/mobile-apps' },
      { title: 'Consulting', href: '/services/consulting' },
    ],
  },
  { title: 'Contact', href: '/contact' },
]

export function HamburgerMenu() {
  return (
    <Popover>
      <PopoverButton className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
        <span className="sr-only">Open menu</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </PopoverButton>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-[999]"
        >
          <div className="rounded-lg shadow-lg ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <LogoMenu />
                </div>
                <div className="-mr-2">
                  <PopoverButton className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XCircle className="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-4">
                  <InternalLink
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <ChartBarIcon
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">Home</span>
                  </InternalLink>
                  <InternalLink
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <ChartBarIcon
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">About</span>
                  </InternalLink>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {menuItems.map((item) => (
                  <InternalLink
                    key={item.title}
                    href={item.href || '#'}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.title}
                  </InternalLink>
                ))}
              </div>
              <div>
                <div className="flex justify-center mb-4 gap-2">
                  <AuthHeaderMenu />
                </div>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  )
}
