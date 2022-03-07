import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Wrapper>
      <div className='error'>
        <h3>404</h3>
        <p>page does not exist</p>
        <Link to='/'>back home</Link>
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
  a {
    color: #fcfcfc;
    background-color: #1b1b1b;
    padding: 0.15rem 0.4rem;
    border-radius: 5px;
  }
`

export default Error
