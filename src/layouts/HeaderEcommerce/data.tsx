import { Heart, User } from "lucide-react"

import { ShoppingCart } from "lucide-react"

export const MAIN_MENU_ITEMS = [
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

export const HAMBURGER_MENU_ITEMS = [
  {
    id: 1,
    name: 'Wishlist',
    href: '/wishlist',
    icon: Heart
  },
  {
    id: 2,
    name: 'Cart',
    href: '/cart',
    icon: ShoppingCart
  },
  {
    id: 3,
    name: 'Account',
    href: '/account',
    icon: User
  },
]
