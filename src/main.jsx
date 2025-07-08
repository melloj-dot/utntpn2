import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CatsPage from './pages/CatsPage.jsx'
import ContactUsPage from './pages/ContactUsPage.jsx'

import './styles/index.css'
import App from './App.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/cats",
        element: <CatsPage />
      },
      {
        path: "/contactus",
        element: <ContactUsPage />
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
