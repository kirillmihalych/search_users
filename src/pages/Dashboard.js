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
          <div className='loading'></div>
        </div>
      </Wrapper>
    )
  }
  return (
    <>
      <Navbar />
      <Wrapper>
        <Search />
        <User />
        <Info />
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
  .loading:before {
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

export default Dashboard
