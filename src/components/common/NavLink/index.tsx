import { Link, useLocation } from 'react-router-dom'

export { NavLink }

interface NavLinkProps {
  href: string
  exact?: boolean
  activeClassName?: string
  children?: React.ReactNode
  className?: string
}

function NavLink({ href, exact, activeClassName = 'active', children, ...props }: NavLinkProps) {
  const location = useLocation()
  const pathname = location.pathname
  const isActive = exact ? pathname === href : pathname.startsWith(href)
  if (isActive) {
    // console.log(isActive, href)
  }

  if (isActive) {
    const additionalClass = activeClassName || ' active'
    props.className += ` ${additionalClass} `
  }

  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  )
}

export default NavLink
