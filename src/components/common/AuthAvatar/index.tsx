import { useAuthStore } from "@/features/auth/store/authStore"
import { cn } from "@/lib/utils"

type AvatarProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  className?: string
}

export function AuthAvatar({ size = 'md', className }: AvatarProps) {
  const { user } = useAuthStore()
  const url = user?.avatar || '/public/assets/images/default-avatar.png'
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-full',
        {
          'h-8 w-8': size === 'sm',
          'h-10 w-10': size === 'md',
          'h-12 w-12': size === 'lg',
          'h-16 w-16': size === 'xl',
          'h-20 w-20': size === '2xl',
          'h-24 w-24': size === '3xl',
        },
        className,
      )}
    >
      <img src={url} alt="Logo" className="object-cover" />
    </div>
  )
}

