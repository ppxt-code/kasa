import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import LogementProvider from "./components/LogementProvider"

import './css/style.css'
import './scss/styles.scss'
import "@fontsource/montserrat-alternates";
import "@fontsource/montserrat-alternates/700.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LogementProvider>
        <App />
      </LogementProvider>
    </BrowserRouter>
  </StrictMode>,
)
