import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0()
  if (isLoading) {
    return <div>loading...</div>
  }
  if (error) {
    return console.log(error)
  }
  return <>{children}</>
}

export default AuthWrapper
