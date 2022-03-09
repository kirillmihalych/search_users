import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0()
  if (isLoading) {
    return <Loading></Loading>
  }
  if (error) {
    return console.log(error)
  }
  return <>{children}</>
}

const Loading = styled.section`
  :before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 0.2rem solid lightgrey;
    border-top-color: #0aa0e3;
    animation: spinner 0.7s linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`

export default AuthWrapper
