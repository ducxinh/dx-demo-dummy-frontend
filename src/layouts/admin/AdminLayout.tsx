import { QuickSearchGlobal } from '@/components/features/QuickSearchGlobal'
import Header from '@/layouts/admin/Header'
import Sidebar from '@/layouts/admin/Sidebar'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { PageContent } from './PageContent'
import useBodyOverflowHidden from '@/hooks/useBodyOverflowHidden'
import { useLocation } from 'react-router-dom'

const AdminLayout = () => {
  const location = useLocation()

  const storedSidebarExpanded =
    typeof window !== 'undefined' ? localStorage.getItem('sidebar-expanded') : null

  const shouldFullHeight = () => {
    const disableFullHeightRoutes = ['admin/file', '/admin/fle/*']
    if (disableFullHeightRoutes.some(route => location.pathname.includes(route))) {
      return false
    }
    return true
  }

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  )

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarOpen.toString())
    if (sidebarOpen) {
      document.querySelector('body')?.classList.add('sidebar-expanded')
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded')
    }
  }, [sidebarOpen])

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return
      // setSidebarOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  useBodyOverflowHidden(shouldFullHeight())

  // handle when change route path set setSidebarOpen to false
  // issue: alway close sidebar when change route path or reload page
  // useEffect(() => {
  //   setSidebarOpen(false)
  // }, [location.pathname])

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <PageContent fullHeight={shouldFullHeight()}>
              <div className="mx-auto max-w-screen-2xl p-2 md:p-4 2xl:p-4 h-full">
                <Outlet />
              </div>
            </PageContent>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
      <QuickSearchGlobal />
    </div>
  )
}

export default AdminLayout
