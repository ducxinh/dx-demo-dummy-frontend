import React from 'react'

export function PageTableBottomContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="sticky bottom-0 left-0 flex-nowrap mt-[-1px] border-t border-default">
      <div className="bg-box py-2 px-2 ">{children}</div>
    </div>
  )
}
