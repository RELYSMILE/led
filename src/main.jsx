import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import LiveChat from './components/LiveChat/LiveChat.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LiveChat />
    <Home />
  </StrictMode>,
)
