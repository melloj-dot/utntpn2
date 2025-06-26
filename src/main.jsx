import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CatsPage from './pages/CatsPage.jsx'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //children son las rutas anidadas dentro de App
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/cats",
        element: <CatsPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
