import { cn } from '@/lib/utils'
import React from 'react'

export function PageTableContainer({ children }: { children: any | React.ReactNode }) {
  return (
    <section
      className={cn(
        'flex flex-col overflow-hidden flex-nowrap overflow-x-hidden rounded-lg border border-default bg-box',
      )}
    >
      {children}
    </section>
  )
}
