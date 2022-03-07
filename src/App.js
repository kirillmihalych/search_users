import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Error from './pages/Error'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default App
