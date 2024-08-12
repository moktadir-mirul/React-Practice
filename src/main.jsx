import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import StudentProvider from './Context/Student.jsx'
import { RouterProvider } from 'react-router-dom'
import { PostRouter } from './Router/PostRouter.jsx'
import ShopProvider from './Context/ShopContext.jsx'
import { ShopRouter } from './Router/ShopRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<ShopProvider>
  <RouterProvider router={ShopRouter} />
</ShopProvider>    
)
