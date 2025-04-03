import { useEffect, useState } from 'react'

export const useViewport = () => {
  const [viewport, setViewport] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  const HEADER_HEIGHT = 80

  useEffect(() => {
    const handleResize = () => {
      // setViewportHeight(window.innerHeight - HEADER_HEIGHT);
      setViewport({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    // Set the height initially and on resize
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return viewport
}
