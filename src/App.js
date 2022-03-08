import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Error from './pages/Error'
import { useAuth0 } from '@auth0/auth0-react'

const App = () => {
  const { isAuthenticated } = useAuth0()
  return (
    <Routes>
      {(!isAuthenticated && <Route path='/' element={<Login />} />) || (
        <Route path='/' element={<Dashboard />} />
      )}

      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default App
