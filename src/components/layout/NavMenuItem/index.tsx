import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavMenuItem = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const classBase =
    'whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 hover:text-lime-500'
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? `${classBase} text-primary` : classBase)}
    >
      {children}
    </NavLink>
  )
}
