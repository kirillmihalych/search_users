import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  const { limit, error } = useGlobalContext()

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <Wrapper>
      {error.show === true && (
        <ErrorWrapper>
          <p>{error.msg}</p>
        </ErrorWrapper>
      )}
      <form onSubmit={handleSubmit}>
        <AiOutlineSearch className='icon' />
        <input type='text' />
        {limit > 0 && <button type='submit'>search</button>}
      </form>

      <div>Requests: {limit}/ 60 </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  gap: 2rem;
  position: relative;
  form {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--white);
    padding: 0.5rem;
    border-radius: var(--radius);
    .icon {
      flex-grow: 0.3;
      font-size: 1.2rem;
      font-weight: bold;
    }
    input {
      flex-grow: 4;
      border: none;
      padding: 0.25rem 0.5rem;
      background: transparent;
      outline-color: #0aa0e3;
    }
    button {
      cursor: pointer;
      flex-grow: 1.5;
      padding: 0.25rem 0.5rem;
      background: #0aa0e3;
      border: none;
      font-size: 1.05rem;
      border-radius: var(--radius);
      color: var(--white);
      text-transform: capitalize;
      letter-spacing: 0.1rem;
    }
    button:hover {
      color: orange;
      transition: 0.1s;
    }
  }
  div {
    display: flex;
    font-weight: 100;
    align-items: center;
    font-size: 1.3rem;
  }
`

const ErrorWrapper = styled.div`
  color: red;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  padding: 0.2rem 0.4rem;
  letter-spacing: 0.1rem;
`

export default Search
