import { useState } from 'react'

import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router'
import SignUpPage from './pages/SignUpPage'

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  )
}

export default App
