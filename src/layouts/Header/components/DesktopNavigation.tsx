import { LanguageSwitcher } from '@/components/common/LanguageSwitcher'
import { AuthHeaderMenu } from './AuthHeaderMenu'
import { NavigationMenuMain } from './NavigationMenuMain'

export function DesktopNavigation() {
  return (
    <nav className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-2">
      <NavigationMenuMain />
      <LanguageSwitcher />
      <AuthHeaderMenu />
    </nav>
  )
}
