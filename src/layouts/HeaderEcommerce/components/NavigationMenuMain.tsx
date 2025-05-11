'use client'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'
import * as React from 'react'
import { MAIN_MENU_ITEMS } from '../data'
import styles from './NavigationMenuMain.module.css'

export function NavigationMenuMain() {
  return (
    <NavigationMenu className={cn('flex-1 max-w-full', styles['NavigationMenu-has-search'])}>
      <NavigationMenuList className='w-full'>
        {MAIN_MENU_ITEMS.map((menu) => (
          <NavigationMenuItem key={menu.id}>
            <span>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href={menu.href}>
                {menu.name}
              </NavigationMenuLink>
            </span>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem className='flex-1'>
          <div className="relative w-full">
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
