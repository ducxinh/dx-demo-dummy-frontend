import { AppSidebar } from '@/layouts/admin/components/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Header } from '@/layouts/admin/Header/Header1'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
