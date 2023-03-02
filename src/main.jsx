import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import { ContextProvider } from './context/context';
import { ThemeModeProvider } from 'react-theme-mode'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeModeProvider defaultTheme="dark">
        <ContextProvider>
          <App />
        </ContextProvider>
      </ThemeModeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
