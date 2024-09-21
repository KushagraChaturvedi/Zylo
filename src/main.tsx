import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import config from './config.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter basename={config.basename}>
        <App />
      </BrowserRouter>
  </StrictMode>,
)
