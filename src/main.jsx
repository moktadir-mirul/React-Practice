import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import App2 from './App2.jsx'
import StudentProvider from './Context/Student.jsx'
import { RouterProvider } from 'react-router-dom'
import { PostRouter } from './Router/PostRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StudentProvider>
    <RouterProvider router={PostRouter} />
  </StudentProvider>,     

)
