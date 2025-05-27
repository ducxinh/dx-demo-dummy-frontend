import { Outlet } from 'react-router-dom'
import { HeaderBasic } from './Header/HeaderBasic'
// import { Footer } from './Footer'
// import { Header } from './Header/Header'

export function MainLayoutSimple() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <HeaderBasic />
      {/* <main className="flex-1 w-full"> */}
      <main className="container mx-auto">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default MainLayoutSimple
