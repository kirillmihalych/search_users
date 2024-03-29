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
  //error state
  const [error, setError] = useState({ show: false, msg: '' })
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  //search user
  const searchUser = async () => {
    toggleError()
    setLoading(true)
    const response = await axios(`${url}/users/${query}`).catch((error) =>
      console.log(error)
    )
    if (response) {
      setUser(response.data)
      const { login, followers_url } = response.data
      await Promise.allSettled([
        axios(`${url}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ])
        .then((response) => {
          const [repos, followers] = response
          const status = 'fulfilled'
          if (repos.status === status) {
            setRepos(repos.value.data)
          }
          if (followers.status === status) {
            setFollowers(followers.value.data)
          }
        })
        .catch((error) => console.log(error))
    } else {
      toggleError(true, 'no users match your search')
    }
    setLoading(false)
    checkReuqstsLimit()
  }
  // handle requests limit
  const checkReuqstsLimit = () => {
    axios
      .get(`${url}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data
        setLimit(remaining)
        if (remaining === 0) {
          toggleError(true, 'Sorry, you have no more hourly requests')
        }
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    checkReuqstsLimit()
  }, [])

  const toggleError = (show, msg) => {
    setError({ show, msg })
  }

  return (
    <AppContext.Provider
      value={{
        repos,
        followers,
        user,
        limit,
        error,
        query,
        setQuery,
        searchUser,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
