import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Followers from './Followers'
import { useGlobalContext } from '../context'

const User = () => {
  return (
    <Wrapper>
      <Card />
      <Followers />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 3rem 2rem;
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default User
