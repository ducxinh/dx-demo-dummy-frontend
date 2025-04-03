import { useEffect } from 'react'

const useBodyOverflowHidden = (shouldApply: boolean) => {
  useEffect(() => {
    if (shouldApply) {
      document.body.classList.add('overflow-hidden')
      document.body.classList.add('fixed-height')
    } else {
      document.body.classList.remove('overflow-hidden')
      document.body.classList.remove('fixed-height')
    }
    return () => {
      if (shouldApply) {
        document.body.classList.remove('overflow-hidden')
        document.body.classList.remove('fixed-heigh')
      } else {
        document.body.classList.add('overflow-hidden')
        document.body.classList.add('fixed-heigh')
      }
    }
  }, [shouldApply])
}

export default useBodyOverflowHidden
