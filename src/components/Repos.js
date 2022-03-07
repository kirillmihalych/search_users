import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'
import { Pie3D } from './Charts/Pie3D'
import { Doughnut } from './Charts/Doughnut'

const Repos = () => {
  const { repos } = useGlobalContext()

  let languages = repos.reduce((prev, current) => {
    const { language, stargazers_count: stars } = current
    if (!language) return prev

    if (!prev[language]) {
      prev[language] = { label: language, value: 1, stars: stars }
    } else {
      prev[language] = {
        ...prev[language],
        value: prev[language].value + 1,
        stars: prev[language].stars + stars,
      }
    }
    return prev
  }, {})
  languages = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value
    })
    .slice(0, 5)

  let stars = languages
    .sort((a, b) => {
      return b.stars - a.stars
    })
    .map((item) => {
      return { ...item, value: item.stars }
    })
    .slice(0, 5)

  console.log(stars)

  const chartData = [
    {
      label: 'HTML',
      value: '13',
    },
    {
      label: 'CSS',
      value: '17',
    },
    {
      label: 'JS',
      value: '70',
    },
  ]
  return (
    <Wrapper>
      <Pie3D data={languages} />
      <div></div>
      <Doughnut data={stars} />
      <div></div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 5rem 0;
  display: grid;
  gap: 3rem;
  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1170px) {
    grid-template-columns: 2fr 3fr;
  }
`

export default Repos
