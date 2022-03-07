import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Repos from '../components/Repos'
import User from '../components/User'
import Info from '../components/Info'

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Info />
    </>
  )
}

export default Dashboard
