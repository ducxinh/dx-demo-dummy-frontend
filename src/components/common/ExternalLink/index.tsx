import { FiExternalLink } from 'react-icons/fi'

interface Props extends React.LinkHTMLAttributes<HTMLElement> {
  href: string
  icon?: boolean
  showIcon?: boolean
}

export function ExternalLink(props: Props) {
  const { href, icon, showIcon = true, className, children, ...rest } = props

  const resolveClass = () => {
    const classList = ['text-primary', className || '']
    if (icon || showIcon) {
      classList.push('flex items-center gap-0.5')
    }
    return classList.join(' ')
  }

  const resolveHref = () => {
    if (href.includes('http://') || href.includes('https://')) {
      return href
    }
    return `${href}`
  }

  return (
    <a target="_blank" href={resolveHref()} rel="noreferrer" {...rest} className={resolveClass()}>
      {children}
      {showIcon && <FiExternalLink />}
    </a>
  )
}
