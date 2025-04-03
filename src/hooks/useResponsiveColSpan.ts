import { useState, useEffect } from 'react'

interface Breakpoints {
  mobile: number // Screen width for mobile breakpoint
  desktop: number // Screen width for desktop breakpoint
}

const useResponsiveColSpan = (
  breakpoints: Breakpoints,
  mobileColSpan: number,
  desktopColSpan: number,
): number => {
  const [colSpan, setColSpan] = useState(desktopColSpan)

  useEffect(() => {
    const updateColSpan = () => {
      setColSpan(window.innerWidth <= breakpoints.mobile ? mobileColSpan : desktopColSpan)
    }

    updateColSpan() // Initialize
    window.addEventListener('resize', updateColSpan)

    return () => {
      window.removeEventListener('resize', updateColSpan) // Cleanup
    }
  }, [breakpoints, mobileColSpan, desktopColSpan])

  return colSpan
}

export default useResponsiveColSpan
