import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import App2 from './App2.jsx'
import StudentProvider from './Context/Student.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StudentProvider>
   <App /> 
  </StudentProvider>,
)
