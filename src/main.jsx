import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import LogementProvider from "./components/LogementProvider"

import './scss/styles.scss'
import "@fontsource/montserrat-alternates";
import "@fontsource/montserrat-alternates/700.css"
import App from './App.jsx'

const basename = import.meta.env.PROD ? '/kasa' : '/'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <LogementProvider>
        <App />
      </LogementProvider>
    </BrowserRouter>
  </StrictMode>,
)
