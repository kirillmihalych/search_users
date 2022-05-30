import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Followers from './Followers'

const User = () => {
  return (
    <Wrapper>
      <Card />
      <Followers />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 95vw;
  margin: 5rem 0;
  display: grid;
  gap: 3rem 2rem;
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default User
