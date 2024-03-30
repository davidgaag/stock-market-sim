import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ToastProvider from './component/toaster/ToastProvider.tsx'
import UserInfoProvider from './component/userInfo/UserInfoProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserInfoProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </UserInfoProvider>
  </React.StrictMode>,
)
