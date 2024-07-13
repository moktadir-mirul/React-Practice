import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App name={'Mirul Moktadir Khan'}
    age={30}
    languages={['PHP', 'C++', 'Java', 'JavaScript', 'Python']}
    links={[
      {mediaName: 'Facebook', mediaLink: 'www.facebook.com/mirulkhan'},
      {mediaName: 'Twitter', mediaLink: 'www.twitter.com/mirulmoktadir'},
      {mediaName: 'LinkedIn', mediaLink: 'www.linkedin.com/mirulkhan'},
    ]}/>
  </React.StrictMode>,
)
