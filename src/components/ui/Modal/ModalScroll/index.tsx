import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { Button } from '../../button'
import './index.css'
import { FiXCircle } from 'react-icons/fi'
import { cn } from '@/lib/utils'

type ModalType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
interface ModalProps {
  title: ReactNode
  isOpen: boolean
  onClose: () => void
  size?: ModalType
  className?: string
  children: ReactNode
  btnOkLabel?: string
  btnCancelLabel?: string
  handleClose?: () => void
  handleOk?: () => void
}

export function ModalScroll(props: ModalProps) {
  const {
    title,
    isOpen,
    onClose,
    children,
    btnOkLabel = 'Ok',
    btnCancelLabel = 'Cancel',
    handleClose = () => {},
    handleOk = () => {},
  } = props

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-999999" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={cn('modal-panel-scroll')}>
                <div className="modal-panel-scroll-content">
                  <Dialog.Title
                    as="h3"
                    className="text-left text-lg font-medium leading-6 p-6 !text-[20px] relative"
                  >
                    {title}
                    <div className="absolute right-[5px] top-[5px]" onClick={onClose}>
                      <FiXCircle className="w-6 h-6 cursor-pointer" />
                    </div>
                  </Dialog.Title>
                  <div className="modal-scroll-body px-6 text-left">
                    <div className="">{children}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 justify-end">
                      <Button
                        className="min-w-[100px]"
                        color="info"
                        onClick={handleClose}
                        type="button"
                      >
                        {btnCancelLabel}
                      </Button>
                      <Button className="min-w-[100px]" onClick={handleOk} type="submit">
                        {btnOkLabel}
                      </Button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
