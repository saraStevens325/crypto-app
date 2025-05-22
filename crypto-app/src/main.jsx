import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CoinContextProvider from './context/CoinContext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import UserProvider from './context/UserContext.jsx'
const clientId = import.meta.env.clientId;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="319371002595-db4g7078ve0deggdj6f0db5lracgvead.apps.googleusercontent.com">  
    <UserProvider>
    <CoinContextProvider>
      <App />
    </CoinContextProvider>
    </UserProvider>
    </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
