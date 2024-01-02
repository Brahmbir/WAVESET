import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CanvasDataContext } from "./useDataContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CanvasDataContext>
      <App />
    </CanvasDataContext>
  </React.StrictMode>
)
