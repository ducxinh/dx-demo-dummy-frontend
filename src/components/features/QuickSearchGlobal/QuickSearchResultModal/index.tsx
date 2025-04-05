import { Input } from '@/components/ui/input'
import { ModalScroll } from '@/components/ui/Modal/ModalScroll'
import { ROUTE_PATHS } from '@/constants/path'
import { cn } from '@/lib/utils'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InternalLink } from '../../../common/InternalLink'
import { QuickSearchItem } from '../types'

export function QuickSearchResultModal({
  isOpen,
  onClose,
  handleOk,
}: {
  isOpen: boolean
  onClose: () => void
  handleOk: () => void
}) {
  const [formData, setFormData] = useState({
    qsKeyword: '',
  })
  const navigate = useNavigate()
  const [selectedIndex, setsSelectedIndex] = useState<number>(-1)
  const [selectedEnter, setSelectedEnter] = useState<number>(0)
  const [userAction, setUserAction] = useState<{ name: string; id: number }>()

  const handleUserAction = useCallback(() => {
    if (!userAction) return
    if (userAction.name === 'ArrowUp') {
      setsSelectedIndex((previous) => {
        return previous >= 1 ? previous - 1 : previous
      })
    }
    if (userAction.name === 'ArrowDown') {
      setsSelectedIndex((previous) => {
        return previous + 1
      })
    }
    if (userAction.name === 'Enter') {
      if (isOpen) {
        setSelectedEnter((previous) => previous + 1)
      }
    }
  }, [userAction, isOpen])

  useEffect(() => {
    if (userAction) {
      handleUserAction()
    }
  }, [userAction, handleUserAction])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') {
        setUserAction({ name: 'ArrowUp', id: new Date().getTime() })
      }
      if (event.key === 'ArrowDown') {
        setUserAction({ name: 'ArrowDown', id: new Date().getTime() })
      }
      if (event.key === 'Enter') {
        setUserAction({ name: 'Enter', id: new Date().getTime() })
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    if (selectedIndex >= 0) {
      setsSelectedIndex(-1)
    }
  }, [formData.qsKeyword, selectedIndex])

  const getMenuItems = useCallback(() => {
    const resolveMenuByObj = (obj: Record<string, string>, prefix?: string) => {
      const items: QuickSearchItem[] = []
      Object.keys(obj).map((key) => {
        const value = obj[key]
        // ignore dynamic route
        if (typeof value === 'string' && !value.includes(':')) {
          items.push({
            name: prefix ? `${prefix} ${key}` : '',
            path: value,
          })
        }
      })
      return items
    }

    const resolveBaseMenuItems = () => {
      let items: QuickSearchItem[] = []

      const adminMenu: Record<string, string | Record<string, string>> = ROUTE_PATHS.ADMIN

      Object.keys(adminMenu).map((menuItemKey) => {
        const value = adminMenu[menuItemKey]
        if (
          [
            'PAGES',
            'CALENDAR',
            'PROFILE',
            'FORM',
            'CHART',
            'UI',
            'AUTH',
            'TASK',
            'TABLES',
          ].includes(menuItemKey)
        ) {
          return null
        }
        if (typeof value === 'string') {
          items.push({
            name: menuItemKey,
            path: value,
          })
        }
        if (typeof value === 'object') {
          items = [...items, ...resolveMenuByObj(value as Record<string, string>, menuItemKey)]
        }
        return menuItemKey
      })

      return items
    }

    const menus = resolveBaseMenuItems().filter((item) =>
      item.name.toLocaleLowerCase().includes(formData.qsKeyword.toLocaleLowerCase()),
    )
    return menus
  }, [formData.qsKeyword])

  useEffect(() => {
    if (selectedEnter && selectedIndex >= 0) {
      navigate(getMenuItems()[selectedIndex].path)
      setsSelectedIndex(-1)
      setFormData({
        ...formData,
        qsKeyword: '',
      })
      onClose()
    }
  }, [selectedEnter, selectedIndex, navigate, getMenuItems, formData, onClose])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const { target } = event
    const value = event.target.type === 'checkbox' ? target.checked : target.value
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div className="">
      <ModalScroll
        title="Search"
        isOpen={isOpen}
        onClose={onClose}
        handleOk={handleOk}
        handleClose={onClose}
      >
        <div className="my-5">
          <Input
            name="qsKeyword"
            placeholder="Search"
            onChange={onChange}
            value={formData.qsKeyword}
          />
        </div>
        <div className="">
          {getMenuItems().map((menuItem, index) => (
            <div
              key={menuItem.name}
              className={cn('mb-2 cursor-pointer border-x-bodydark2 shadow', {
                'border-b border-primary ': index === selectedIndex,
              })}
            >
              <InternalLink
                className={cn('!hover:text-white uppercase', {})}
                href={menuItem.path}
                onClick={() => {
                  navigate(menuItem.path)
                  onClose()
                }}
              >
                {menuItem.name}
              </InternalLink>
            </div>
          ))}
        </div>
      </ModalScroll>
    </div>
  )
}
