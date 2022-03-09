import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    <Wrapper>
      <div className='center'>
        {(isAuthenticated && (
          <div className='flex-wrapper'>
            <img src={user.picture} alt='user picture' />
            <p>
              Welcome, <span>{user.given_name} </span>
              <span>{user.family_name}</span>
            </p>
            <button
              className='logout'
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              logout
            </button>
          </div>
        )) || (
          <button className='login' onClick={() => loginWithRedirect()}>
            Log in
          </button>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--white);
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  .flex-wrapper {
    display: flex;
    align-items: center;
    img {
      width: 55px;
      height: 100%;
      border-radius: var(--radius);
    }
    p {
      margin-bottom: 0;
      margin-left: 1rem;
    }
    .logout {
      margin-bottom: 0;
      margin-left: 5rem;
      padding: 0.2rem 0.4rem;
      background: transparent;
      color: #0aa0e3;
      border: 2px solid #0aa0e3;
      border-radius: var(--radius);
      text-transform: capitalize;
      font-size: 1rem;
      &:hover {
        cursor: pointer;
        color: var(--white);
        background: #0aa0e3;
        transition: 0.1s;
      }
    }
  }
  .login {
    font-size: 2rem;
    padding: 0.2rem 2rem;
    padding-bottom: 0.5rem;
    background: #0aa0e3;
    color: white;
    border: none;
    border-radius: 7px;
    &:hover {
      cursor: pointer;
      color: orange;
      transition: 0.1s;
    }
  }
`

export default Navbar
