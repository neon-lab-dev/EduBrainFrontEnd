import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root')
let root = null
if (rootElement !== null) {
  root = ReactDOM.createRoot(rootElement)
  // continue with your code
} else {
  console.error("Root element with ID 'root' not found.")
}
if (root !== null) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

reportWebVitals()
