'use client'

import { cn } from '@/lib/utils'
import { DesktopNavigation } from './components/DesktopNavigation'
import { HamburgerMenu } from './components/HamburgerMenu'
import { LogoMenu } from '../components/LogoMenu'

export function Header({ sticky = true }: { sticky?: boolean }) {
  return (
    <header
      className={cn('bg-white border-b-2 border-gray-4', {
        'sticky top-0 z-[50]': sticky,
      })}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 md:my-0">
        <div className="flex justify-between items-center py-1 md:py-0 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <LogoMenu />
          </div>
          <DesktopNavigation />
          <div className="-mr-2 -my-2 md:hidden flex items-center">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
