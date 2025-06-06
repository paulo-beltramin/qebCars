import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { AuthProvider } from './components/Context/authContext'
import { Toaster } from 'react-hot-toast'

import routes from './routes'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster position='top-center' />
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </StrictMode>,
)
