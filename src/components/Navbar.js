import React from 'react'
import styled from 'styled-components'
import { BsGithub } from 'react-icons/bs'

const Navbar = () => {
  return (
    <Wrapper>
      <div className='center'>
        <div className='flex-wrapper'>
          <div className='nav-title'>
            <h3 className='logo'>
              <BsGithub />
              github profiles
            </h3>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 3.5rem;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow);
  .flex-wrapper {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
    cursor: pointer;
    text-transform: lowercase;
    display: flex;
    align-items: center;
    background: var(--black);
    border-radius: 5px;
    color: var(--white);
    padding: 0.25rem 0.5rem;
    gap: 1rem;
  }
`

export default Navbar
