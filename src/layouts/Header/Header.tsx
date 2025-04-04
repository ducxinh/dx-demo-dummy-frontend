/* This example requires Tailwind CSS v2.0+ */
import { Image } from '@/components/common/Image'
import { InternalLink } from '@/components/common/InternalLink'
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher'
import { NavMenuItem } from '@/components/layout/NavMenuItem'
import { Button } from '@/components/ui/button'
import { ROUTE_PATHS } from '@/constants/path'
import { useAuth } from '@/contexts/AuthContext'
import { siteMetadata } from '@/data/siteMetadata'
import { Popover, PopoverButton, PopoverGroup } from '@headlessui/react'
import { SquareMenuIcon } from 'lucide-react'
import { AccountMenu } from './components/AccountMenu'
import { HeaderMobile } from './components/HeaderMobile'
import { More } from './components/More'
import { Solution } from './components/Solution'

export function Header() {
  const auth = useAuth()
  return (
    <Popover className="bg-white border-b-2 border-gray-4 sticky top-0 z-[50]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <InternalLink href="/" className="flex gap-1 items-center">
              <span className="sr-only">Workflow</span>
              <Image
                alt="Nix"
                className="rounded h-10 w-auto"
                src="/assets/images/logo.png"
                height={42}
                width={42}
              />
              <span className="">{siteMetadata.title}</span>
            </InternalLink>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <div className="flex">
              <LanguageSwitcher />
              <PopoverButton className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <SquareMenuIcon className="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
          <PopoverGroup as="nav" className="hidden md:flex space-x-10">
            <Solution />
            <NavMenuItem to={ROUTE_PATHS.HOME}>Pricing</NavMenuItem>
            <NavMenuItem to={ROUTE_PATHS.HOME}>Docs</NavMenuItem>
            <NavMenuItem to={ROUTE_PATHS.HOME}>About</NavMenuItem>
            <More />
          </PopoverGroup>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {auth.user ? (
              <div className="ml-8">
                <AccountMenu />
              </div>
            ) : (
              <>
                <div className="flex gap-2">
                  <LanguageSwitcher />
                  <InternalLink href={ROUTE_PATHS.AUTH.LOGIN}>
                    <Button variant="secondary">
                      Sign in
                    </Button>
                  </InternalLink>
                  <InternalLink href={ROUTE_PATHS.AUTH.SIGNUP}>
                    <Button>
                      Sign up
                    </Button>
                  </InternalLink>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <HeaderMobile />
    </Popover>
  )
}
