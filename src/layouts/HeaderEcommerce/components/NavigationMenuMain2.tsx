'use client'
import { InternalLink } from '@/components/common/InternalLink'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'
import * as React from 'react'


const menus = [
  {
    id: 1,
    name: 'Categories',
    href: '/categories',
    children: [
      {
        id: 1,
        name: 'Categories',
        href: '/categories',
      },
    ]
  },
  {
    id: 2,
    name: 'Bestsellers',
    href: '/bestsellers',
  },
  {
    id: 3,
    name: 'Deals',
    href: '/deals',
  },
  {
    id: 4,
    name: 'New Arrivals',
    href: '/news',
  },
]

export function NavigationMenuMain() {
  return (
    <NavigationMenu className=''>
      <NavigationMenuList>
        {menus.map((menu) => (
          <NavigationMenuItem key={menu.id}>
            {menu.children?.length ? (
              <>
                <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild href={menu.href}>
                        {menu.name}
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <span>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <InternalLink href={menu.href}>{menu.name}</InternalLink>
                </NavigationMenuLink>
              </span>
            )}
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem className='min-w-[300px]'>
          <div className="relative w-full min-w-[500px]">
            <input
              type="text"
              placeholder="Search for educational products..."
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <span
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </span>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = 'ListItem'
