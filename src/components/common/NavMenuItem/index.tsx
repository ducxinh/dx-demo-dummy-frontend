import { cn } from '@/lib/utils'
import React from 'react'
import { NavLink } from 'react-router-dom'

interface ActiveLinkProps {
  href: string
  children: React.ReactNode
  activeClassName?: string
  className?: string
}

export const NavMenuItem = ({
  href,
  children,
  activeClassName = 'text-blue-600 font-bold',
  className,
}: ActiveLinkProps) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          'whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 hover:text-lime-500',
          className,
          isActive && activeClassName,
        )
      }
    >
      {children}
    </NavLink>
  )
}
