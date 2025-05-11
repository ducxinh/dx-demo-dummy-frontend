import { InternalLink as Link } from '@/components/common/InternalLink'
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher'
import { ShoppingCart } from 'lucide-react'
import { Heart } from 'lucide-react'
import { AuthHeaderMenu } from './AuthHeaderMenu'
import { NavigationMenuMain } from './NavigationMenuMain'

export function DesktopNavigation() {
  return (
    <nav className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-4">
      <NavigationMenuMain />
      <LanguageSwitcher />
      <Link href="/wishlist" className="text-gray-700 hover:text-primary">
        <Heart className="h-6 w-6" />
      </Link>
      <Link href="/cart" className="text-gray-700 hover:text-primary relative">
        <ShoppingCart className="h-6 w-6" />
        <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          3
        </span>
      </Link>
      <AuthHeaderMenu />
    </nav>
  )
}
