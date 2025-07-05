import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CatsPage from './pages/CatsPage.jsx'
import './index.css'
import App from './App.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

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
      },
      {
        path: "*",
        element: <NotFoundPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />

)
