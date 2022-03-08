import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <Wrapper>
      <div className='login'>
        <button onClick={() => loginWithRedirect()}>Sign in</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  div {
    text-align: center;
  }
  button {
    font-size: 2.25rem;
    padding: 0 1rem;
    padding-bottom: 0.5rem;
    border: none;
    border-radius: var(--radius);
    color: var(--white);
    background-color: #0aa0e3;
    border-radius: var(--radius);
    &:hover {
      cursor: pointer;
      transition: 0.1s;
      color: orange;
    }
  }
`

export default Login
