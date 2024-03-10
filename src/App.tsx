import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Hiii</div>} />
      </Routes>
    </Router>
  )
}

export default App
