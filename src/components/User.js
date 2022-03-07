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
  margin-bottom: 5rem;
`

export default User
