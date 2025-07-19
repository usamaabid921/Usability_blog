import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import * as Pages from './pages/index.js'
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Pages.Home />,
      },
      { 
        path: "about", 
        element: <Pages.About /> 
      },
      { 
        path: "blogs", 
        element: <Pages.Blogs /> 
      },
      { 
        path: "blog/:id", 
        element: <Pages.BlogDetails /> 
      },
      { 
        path: "categories", 
        element: <Pages.Categories /> 
      },
      {
         path: "contact", 
         element: <Pages.Contact /> 
      },
      { 
        path: "faqs", 
        element: <Pages.Faqs /> 
      },
      { 
        path: "signup", 
        element: <Pages.Signup /> 
      },
    ]
  }
],

{
    basename: import.meta.env.BASE_URL
}

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
