import { cn } from '@/lib/utils'

type AvatarProps = {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Avatar({ src, alt, size = 'md', className }: AvatarProps) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-full',
        {
          'h-8 w-8': size === 'sm',
          'h-10 w-10': size === 'md',
          'h-12 w-12': size === 'lg',
        },
        className,
      )}
    >
      <img src={src} alt={alt} className="object-cover" />
    </div>
  )
}
