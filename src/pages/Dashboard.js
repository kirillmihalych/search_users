import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Repos from '../components/Repos'
import User from '../components/User'
import Info from '../components/Info'

const Dashboard = () => {
  return (
    <Wrapper>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
`

export default Dashboard
