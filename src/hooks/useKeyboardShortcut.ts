import { useEffect } from 'react'

const useKeyboardShortcut = (keyCombination: string, callback: () => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keys = keyCombination.split('+')

      if (keyCombination.includes('+')) {
        // useKeyboardShortcut('Cmd+Enter', () => { })
        const metaKey = keys.includes('Cmd') ? event.metaKey : true
        const key = keys.includes(event.key)
        if (metaKey && key) {
          event.preventDefault()
          callback()
        }
      } else {
        // useKeyboardShortcut('ArrowRight', () => { })
        if (event.key === keys[0]) {
          event.preventDefault()
          callback()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [keyCombination, callback])
}

export default useKeyboardShortcut
