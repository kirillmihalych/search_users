import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'
import { Pie3D } from './Charts/Pie3D'
import { Doughnut } from './Charts/Doughnut'
import { Column } from './Charts/Column'
import { Bar } from './Charts/Bar'

const Repos = () => {
  const { repos } = useGlobalContext()

  let languages = repos.reduce((prev, current) => {
    const { language, stargazers_count: stars, forks_count: forks } = current
    if (!language) return prev

    if (!prev[language]) {
      prev[language] = { label: language, value: 1, stars: stars, forks: forks }
    } else {
      prev[language] = {
        ...prev[language],
        value: prev[language].value + 1,
        stars: prev[language].stars + stars,
        forks: prev[language].forks + forks,
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

  let forks = languages
    .sort((a, b) => {
      return b.forks - a.forks
    })
    .map((item) => {
      return { ...item, value: item.forks }
    })

  return (
    <Wrapper>
      <Pie3D data={languages} />
      <Column data={stars} />
      <Doughnut data={stars} />
      <Bar data={forks} />
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

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`

export default Repos
