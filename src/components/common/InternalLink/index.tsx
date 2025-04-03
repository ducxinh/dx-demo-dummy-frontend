import { Link } from 'react-router-dom'

interface Props extends React.LinkHTMLAttributes<HTMLElement> {
  href: string
}

export function InternalLink(props: Props) {
  const { href, className, children, ...rest } = props

  const resolveClass = () => {
    const classList = ['text-primary', className || '']

    return classList.join(' ')
  }

  return (
    <Link to={href} {...rest} className={resolveClass()}>
      {children}
    </Link>
  )
}
