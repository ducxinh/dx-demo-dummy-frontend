import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n/config'
import { Toaster } from '@/components/ui/sonner'
// import '@/locales/i18n.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster
      toastOptions={{
        classNames: {},
      }}
    />
    <App />
  </StrictMode>,
)
