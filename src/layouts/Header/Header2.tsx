import { Image } from '@/components/common/Image'
import { InternalLink } from '@/components/common/InternalLink'
import { LocaleSwitcher } from '@/components/common/LocaleSwitcher'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { siteMetadata } from '@/data/siteMetadata'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { AuthHeaderMenu } from '../AuthHeaderMenu'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="relative bg-white border-b-2 border-gray-100 z-[999]">
      <div className="container _max_w-7xl mx-auto px-4 md:px-0 sm:px-6">
        <div className="flex justify-between items-center py-2 md:py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <InternalLink href="/" className="flex gap-1 items-center">
              <span className="sr-only">Workflow</span>
              <Image
                responsive={false}
                alt="Nix"
                // className="rounded sm:h-10 w-auto"
                className="rounded sm:h-10 w-auto"
                src="/assets/images/logo.png"
                height={42}
                width={42}
              />
              <span className="">{siteMetadata.title}</span>
            </InternalLink>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <InternalLink href="/">
                  <NavigationMenuLink className="text-base font-medium text-gray-500 hover:text-gray-900 px-3 py-2">
                    Home
                  </NavigationMenuLink>
                </InternalLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <InternalLink href="/about">
                  <NavigationMenuLink className="text-base font-medium text-gray-500 hover:text-gray-900 px-3 py-2">
                    About
                  </NavigationMenuLink>
                </InternalLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <LocaleSwitcher />
            <AuthHeaderMenu />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-[999]">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto"
                    src="/assets/images/logo.png"
                    alt="Workflow"
                    height={40}
                    width={40}
                  />
                </div>
                <div className="-mr-2">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <InternalLink
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">Home</span>
                  </InternalLink>
                  <InternalLink
                    href="/about"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">About</span>
                  </InternalLink>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <InternalLink
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Home
                </InternalLink>
                <InternalLink
                  href="/about"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  About
                </InternalLink>
                <InternalLink
                  href="/contact"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Contact
                </InternalLink>
                <InternalLink
                  href="/service"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Service
                </InternalLink>
              </div>
              <div>
                <div className="flex justify-center mb-4">
                  <LocaleSwitcher />
                </div>
                <InternalLink href="/signup">
                  <Button className="w-full">Sign up</Button>
                </InternalLink>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <InternalLink href="/login" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </InternalLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
