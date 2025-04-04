import { AuthProvider } from '@/contexts/AuthContext'
// import useTranslation from "@/hooks/useTranslation";
import { router } from '@/lib/router'
import { RouterProvider } from 'react-router-dom'
import { QueryProvider } from './providers/QueryProvider'

function App() {
  // const { t } = useTranslation();

  return (
    <QueryProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryProvider>
  )
}

export default App
