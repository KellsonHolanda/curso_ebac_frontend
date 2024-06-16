import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PI, GTM_BRASIL } from './teste.js'
import nomes from './nomes.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {nomes}
    {PI}
    {GTM_BRASIL}
    <App />
  </React.StrictMode>,
)
