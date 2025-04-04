import { Seo } from '@/components/common/Seo/Seo'
import { Modal } from '@/components/ui/Modal'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function GlobalSetting() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const { t } = useTranslation()

  return (
    <>
      <Seo title={'Global Settings'} description={'Global Settings'} />
      <div className="mr-4 pr-4">
        <button
          type="button"
          className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-lime-500"
          onClick={() => setIsModalOpen(true)}
        >
          Setting
        </button>
        <Modal isOpen={isModalOpen} title="Setting" onClose={() => setIsModalOpen(false)} size="xl">
          <div className=""></div>
        </Modal>
      </div>
    </>
  )
}
