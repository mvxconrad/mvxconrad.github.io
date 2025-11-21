import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// Import Bootswatch Cyborg theme
import 'bootswatch/dist/cyborg/bootstrap.min.css'
// Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'
// Import custom CSS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
