import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import routes from './routes.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'

const router = createBrowserRouter(routes);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
