import { InternalLink } from '@/components/common/InternalLink'
import { ROUTE_PATHS } from '@/constants/path'

export function DesktopNavigationBasic() {
  return (
    <nav className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-4">
      <InternalLink href={ROUTE_PATHS.TODO_LIST} className="text-gray-700 hover:text-primary">
        Todo List
      </InternalLink>
      <InternalLink href={ROUTE_PATHS.ECOMMERCE.INDEX} className="text-gray-700 hover:text-primary">
        Ecommerce
      </InternalLink>
    </nav>
  )
}
