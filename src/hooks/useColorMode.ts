import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage('color-theme', 'light')

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorMode === 'dark' ? 'light' : 'dark')
    root.classList.add(colorMode)
  }, [colorMode])

  return [colorMode, setColorMode]
}

export default useColorMode
