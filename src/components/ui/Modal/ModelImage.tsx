import { Dialog, Transition, TransitionChild } from '@headlessui/react'
import { Fragment } from 'react'
import { cn } from '@/lib/utils'
import { FaChevronLeft } from 'react-icons/fa'
import { FiXCircle } from 'react-icons/fi'
// import { DropdownMenu } from '../dropdown-menu'

type ModalType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

export type IFileItem = {
  id?: number
  url: string
  title?: string
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  size?: ModalType
  className?: string
  file: IFileItem
}

export function ModelImage(props: ModalProps) {
  const { className, isOpen, onClose, size, file } = props

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-999999" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
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
                  'w-full transform overflow-hidden rounded-2xl bg-box text-left align-middle shadow-xl transition-all',
                  size === 'md' ? 'max-w-md' : '',
                  size === 'lg' ? 'max-w-lg' : '',
                  size === 'xl' ? 'max-w-4xl' : '',
                  className ? className : '',
                )}
              >
                <div className="bg-white flex justify-between relative py-2 px-2">
                  <div className="">
                    <FaChevronLeft className="w-6 h-6 cursor-pointer" />
                  </div>
                  <div className="">Friday</div>
                  <div className="text-dark">
                    <FiXCircle className="w-6 h-6 cursor-pointer hidden" />
                  </div>
                </div>
                <div className="mt-2 min-h-[400px] flex items-center justify-center">
                  <div className={`flex justify-center items-center overflow-hidden`}>
                    <img src={file.url} />
                  </div>
                </div>
              </Dialog.Panel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
