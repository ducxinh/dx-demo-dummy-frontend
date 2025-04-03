import { cn } from '@/lib/utils'
import React from 'react'
import './style.css'
import { useViewport } from '@/hooks/useViewport'

export function PageContent({
  fullHeight,
  children,
}: {
  fullHeight: boolean
  children: any | React.ReactNode
}) {
  const topNavigationHeight = 56
  const topNavigationHeightMobile = 60
  const viewport = useViewport()

  return (
    <div
      style={{
        height: !fullHeight
          ? 'auto'
          : viewport.width <= 800
            ? viewport.height - topNavigationHeightMobile
            : viewport.height - topNavigationHeight,
      }}
      className={cn(
        `page-content`,
        // `!h-dvh`,
        // `!h-[500px]`,
        // `h-[calc(100vh-${topNavigationHeight}px)]`,
        //
      )}
      id="main-content"
    >
      {children}
    </div>
  )
}
