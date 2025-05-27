import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

interface Props extends React.LinkHTMLAttributes<HTMLElement> {
  href: string
}

export function InternalLink(props: Props) {
  const { href, className, children, ...rest } = props

  return (
    <Link to={href} {...rest} className={cn(className, 'text-primary text-blue-500')}>
      {children}
    </Link>
  )
}
