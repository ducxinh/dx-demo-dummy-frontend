import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { BellIcon } from 'lucide-react'

export function DropdownNotification() {
  // Mock notification data
  const notifications = [
    {
      id: 1,
      title: 'New message',
      description: 'You have received a new message from John Doe',
      time: '2 minutes ago',
      read: false,
    },
    {
      id: 2,
      title: 'System update',
      description: 'System maintenance scheduled for tomorrow',
      time: '1 hour ago',
      read: true,
    },
    {
      id: 3,
      title: 'New feature',
      description: 'Check out our latest feature release',
      time: '2 hours ago',
      read: true,
    },
  ]

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="py-2">
          <Button variant="ghost" size="icon" className="relative">
            <BellIcon className="h-5 w-5" />
            {unreadCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center"
              >
                {unreadCount}
              </Badge>
            )}
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.map((notification) => (
          <DropdownMenuItem key={notification.id} className="flex flex-col items-start gap-1 py-2">
            <div className="flex items-center justify-between w-full">
              <span className="font-medium">{notification.title}</span>
              {!notification.read && <span className="h-2 w-2 rounded-full bg-primary" />}
            </div>
            <span className="text-sm text-muted-foreground">{notification.description}</span>
            <span className="text-xs text-muted-foreground">{notification.time}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
