import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { FiXCircle } from 'react-icons/fi'

type ModalType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

interface ModalProps {
  title: ReactNode
  isOpen: boolean
  onClose: () => void
  size?: ModalType
  className?: string
  children: ReactNode
}

export function Modal(props: ModalProps) {
  const { className, title, isOpen, onClose, size, children } = props

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
              <Dialog.Panel
                className={cn(
                  'w-full transform overflow-hidden rounded-2xl bg-box p-6 text-left align-middle shadow-xl transition-all',
                  size === 'md' ? 'max-w-md' : '',
                  size === 'lg' ? 'max-w-lg' : '',
                  size === 'xl' ? 'max-w-4xl' : '',
                  className ? className : '',
                )}
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 relative"
                >
                  {title}
                  <div className="absolute right-[-10px] top-[-10px]" onClick={onClose}>
                    <FiXCircle className="w-6 h-6 cursor-pointer" />
                  </div>
                </Dialog.Title>
                <div className="mt-2">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
