import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ToastProvider from './component/toaster/ToastProvider'
import UserInfoProvider from './component/userInfo/UserInfoProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserInfoProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </UserInfoProvider>
  </React.StrictMode>,
)
