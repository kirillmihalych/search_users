import React, { useState, useContext } from 'react'
import mockFollowers from './mockData/mockFollowers'
import mockRepos from './mockData/mockRepos'
import mockUser from './mockData/mockUser'

const AppContext = React.createContext()

const url = 'https://api.github.com/'

const AppProvider = ({ children }) => {
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)
  const [user, setUser] = useState(mockUser)

  return (
    <AppContext.Provider value={{ repos, followers, user }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
