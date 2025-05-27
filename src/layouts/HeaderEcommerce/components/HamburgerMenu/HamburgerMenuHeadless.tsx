'use client'
import { InternalLink } from '@/components/common/InternalLink'
import { LogoMenu } from '@/layouts/components/LogoMenu'
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { Heart, Menu, Search, ShoppingCart, User, XCircle } from 'lucide-react'
import { Fragment } from 'react'

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
              <div className="mt-2 py-2">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search for educational products..."
                    className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="mt-2 py-2 px-5">
              <nav className="flex flex-col space-y-3 py-3">
                <InternalLink
                  href="/categories"
                  className="text-gray-700 hover:text-primary font-medium py-2"
                >
                  Categories
                </InternalLink>
                <InternalLink
                  href="/bestsellers"
                  className="text-gray-700 hover:text-primary font-medium py-2"
                >
                  Bestsellers
                </InternalLink>
                <InternalLink
                  href="/deals"
                  className="text-gray-700 hover:text-primary font-medium py-2"
                >
                  Deals
                </InternalLink>
                <InternalLink
                  href="/new"
                  className="text-gray-700 hover:text-primary font-medium py-2"
                >
                  New Arrivals
                </InternalLink>
              </nav>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="flex justify-around py-3 border-gray-200 flex-wrap">
                <InternalLink
                  href="/wishlist"
                  className="flextext-base font-medium  max-w-1/3 w-1/3 text-gray-700 hover:text-primary flex flex-col items-center"
                >
                  <Heart className="h-6 w-6" />
                  <span className="text-sm">Wishlist</span>
                </InternalLink>
                <InternalLink
                  href="/cart"
                  className="text-gray-700 hover:text-primary flex flex-col items-center relative"
                >
                  <ShoppingCart className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                  <span className="text-sm">Cart</span>
                </InternalLink>
                <InternalLink
                  href="/profile"
                  className="flextext-base font-medium  max-w-1/3 w-1/3 text-gray-700 hover:text-primary flex flex-col items-center"
                >
                  <User className="h-6 w-6" />
                  <span className="text-sm">Account</span>
                </InternalLink>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  )
}
