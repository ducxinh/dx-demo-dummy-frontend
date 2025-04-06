import { ModelImage } from '@/components/ui/Modal/ModelImage'
import React, { useState } from 'react'

interface ImageContextType {
  previewImage?: { url: string }
  setPreviewImage: (image?: { url: string }) => void
}

const ImageContext = React.createContext<ImageContextType>(null!)

export function ImageProvider({ children }: { children: React.ReactNode }) {
  const [previewImage, setPreviewImage] = useState<{ url: string }>()

  const value = {
    previewImage,
    setPreviewImage,
  }

  return (
    <ImageContext.Provider value={value}>
      <>
        {previewImage && (
          <ModelImage
            isOpen={!!previewImage}
            onClose={() => {
              setPreviewImage(undefined)
            }}
            file={previewImage}
            size="xl"
          />
        )}

        {children}
      </>
    </ImageContext.Provider>
  )
}

export function useImage() {
  return React.useContext(ImageContext)
}
