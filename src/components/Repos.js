import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'
import { Pie3D } from './Charts/Pie3D'

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
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 5rem 0;
`

export default Repos
