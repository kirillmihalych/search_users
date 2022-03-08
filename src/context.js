import React, { useState, useContext, useEffect } from 'react'
import mockFollowers from './mockData/mockFollowers'
import mockRepos from './mockData/mockRepos'
import mockUser from './mockData/mockUser'
import axios from 'axios'

const AppContext = React.createContext()

const url = 'https://api.github.com'

const AppProvider = ({ children }) => {
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)
  const [user, setUser] = useState(mockUser)
  //setup requests
  const [limit, setLimit] = useState()

  useEffect(() => {
    axios
      .get(`${url}/rate_limit`)
      .then(({ data }) => {
        setLimit(data.rate.remaining)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <AppContext.Provider value={{ repos, followers, user, limit }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
