import { useState } from 'react'
import { Modal } from '@/components/ui/Modal'

export function GlobalSetting() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div className="mr-4 pr-4">
      <button
        type="button"
        className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 hover:text-lime-500"
        onClick={() => setIsModalOpen(true)}
      >
        Setting
      </button>
      <Modal isOpen={isModalOpen} title="Setting" onClose={() => setIsModalOpen(false)} size="xl">
        <div className=""></div>
      </Modal>
    </div>
  )
}
