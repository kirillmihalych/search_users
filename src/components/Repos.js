import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'
import { ChartExample } from './Charts/ChartExample'

const Repos = () => {
  const { repos } = useGlobalContext()
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
      <ChartExample data={chartData} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 5rem 0;
`

export default Repos
