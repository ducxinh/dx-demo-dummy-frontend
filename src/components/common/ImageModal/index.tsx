import { Modal } from '@/components/ui/Modal'
import { cn } from '@/utils/helpers'
import React, { useState, useEffect, useRef } from 'react'

interface Props extends React.HTMLAttributes<HTMLImageElement> {
  src: string
  alt?: string
}

export function ImageModal({ src, className, alt }: Props) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [imageSize, setImageSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  })

  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight

      // Check if image is already cached
      if (imageRef.current && imageRef.current.complete) {
        const imageWidth = imageRef.current.naturalWidth
        const imageHeight = imageRef.current.naturalHeight

        // Calculate new dimensions based on screen size and aspect ratio
        let newWidth = imageWidth
        let newHeight = imageHeight

        if (imageHeight > screenHeight) {
          newHeight = screenHeight * 0.8
          newWidth = (newHeight * imageWidth) / imageHeight
        } else if (imageWidth > screenWidth) {
          newWidth = screenWidth * 0.8
          newHeight = (newWidth * imageHeight) / imageWidth
        }

        setImageSize({ width: newWidth, height: newHeight })
        return
      }

      console.log('image.onload')

      // Get the actual image dimensions
      const image = new Image()
      image.onload = () => {
        const imageWidth = image.naturalWidth
        const imageHeight = image.naturalHeight

        // Calculate new dimensions based on screen size and aspect ratio
        let newWidth = imageWidth
        let newHeight = imageHeight

        if (imageHeight > screenHeight) {
          newHeight = screenHeight * 0.5
          newWidth = (newHeight * imageWidth) / imageHeight
        } else if (imageWidth > screenWidth) {
          newWidth = screenWidth * 0.8
          newHeight = (newWidth * imageHeight) / imageWidth
        }

        setImageSize({ width: newWidth, height: newHeight })
      }
      image.src = src
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [src])

  const onClose = () => {
    setIsOpenModal(false)
  }

  const openModal = () => {
    setIsOpenModal(true)
  }

  return (
    <>
      <img src={src} className={cn('w-[20px] h-auto rounded', className)} onClick={openModal} />
      <Modal title="" isOpen={isOpenModal} onClose={onClose} size="xl">
        <div className={`flex justify-center items-center overflow-hidden`}>
          {/* <img src={url} alt={alt || ''} className={cn('max-w-full max-h-full object-contain')} /> */}
          <img
            src={src}
            alt={alt || ''}
            className={cn('_w-full _h-auto _object-cover _max-h-[300px] rounded')}
            style={{ width: imageSize.width, height: imageSize.height }}
          />
        </div>
      </Modal>
    </>
  )
}
