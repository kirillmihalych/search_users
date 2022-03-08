import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Repos from '../components/Repos'
import User from '../components/User'
import Info from '../components/Info'
import { useGlobalContext } from '../context'

const Dashboard = () => {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <Wrapper>
        <div className='flex-container'>
          <div className='loading'>
            <h3>Page is loading.</h3>
            <p>Please, wait.</p>
          </div>
        </div>
      </Wrapper>
    )
  }
  return (
    <>
      <Navbar />
      <Wrapper>
        <Search />
        <Info />
        <User />
        <Repos />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  .flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95vh;
    div {
      text-align: center;
    }
  }
`

export default Dashboard
