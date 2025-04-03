import { useCallback, useEffect, useState } from 'react'
import { QuickSearchResultModal } from './QuickSearchResultModal'

export function QuickSearchGlobal() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  // const openModal = () => setIsModalOpen(true)
  // const closeModal = () => setIsModalOpen(false)
  const openModal = useCallback(() => setIsModalOpen(true), [])
  const closeModal = useCallback(() => setIsModalOpen(false), [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === 'k') {
        event.preventDefault()
        openModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="">
      <QuickSearchResultModal isOpen={isModalOpen} onClose={closeModal} handleOk={closeModal} />
    </div>
  )
}
