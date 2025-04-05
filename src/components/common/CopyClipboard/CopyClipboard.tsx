import { cn } from '@/lib/utils'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FiCopy } from 'react-icons/fi'
import { toast } from 'react-toastify'

interface CopyClipboardProps {
  text: string
  onCopy?: () => void
  children?: React.ReactNode
  showIcon?: boolean
  className?: string
}

export function CopyClipboard({
  text,
  onCopy,
  showIcon = true,
  className = '',
  children,
}: CopyClipboardProps) {
  const handleCopy = () => {
    if (onCopy) {
      onCopy()
    } else {
      toast.success('Copied')
    }
  }

  return (
    <CopyToClipboard text={text} onCopy={handleCopy}>
      {children ? (
        <div
          className={cn(
            'flex items-center',
            {
              'gap-2': showIcon,
            },
            className,
          )}
        >
          {children}
          {showIcon && (
            <span className="cursor-pointer">
              <FiCopy />
            </span>
          )}
        </div>
      ) : (
        <span className="cursor-pointer">
          <FiCopy />
        </span>
      )}
    </CopyToClipboard>
  )
}
