import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'   // 👈 this is the key


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter> 
      {/* to enable routing in app we wrap our component inside react rouer dom  */}
     <App />
     </BrowserRouter>
  </StrictMode>,
)
