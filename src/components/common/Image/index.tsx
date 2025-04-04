import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * The source URL of the image
   */
  src: string
  /**
   * Alternative text for the image
   */
  alt: string
  /**
   * Optional className to extend or override default styles
   */
  className?: string
  /**
   * Whether the image should be rounded
   */
  rounded?: boolean
  /**
   * Whether the image should have a border
   */
  bordered?: boolean
  /**
   * Whether the image should be responsive
   */
  responsive?: boolean
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    { src, alt, className, rounded = false, bordered = false, responsive = true, ...props },
    ref,
  ) => {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn(
          'object-cover',
          // rounded && "rounded-md",
          // bordered && "border border-border",
          // responsive && "w-full h-auto",
          className,
        )}
        {...props}
      />
    )
  },
)

Image.displayName = 'Image'
