import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'
import { Pie3D } from './Charts/Pie3D'
import { Doughnut } from './Charts/Doughnut'

const Repos = () => {
  const { repos } = useGlobalContext()

  let languages = repos.reduce((total, item) => {
    const { language } = item
    if (!language) return total
    if (!total[language]) {
      total[language] = { label: language, value: 1 }
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      }
    }
    return total
  }, {})
  languages = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value
    })
    .slice(0, 5)
  console.log(languages)

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
      <Doughnut data={chartData} />
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
