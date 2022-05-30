import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  const { limit, error, query, setQuery, searchUser } = useGlobalContext()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (query) {
      setQuery(query)
    }
  }

  return (
    <Wrapper>
      {error.show === true && (
        <ErrorWrapper>
          <p>{error.msg}</p>
        </ErrorWrapper>
      )}
      <form onSubmit={handleSubmit}>
        {limit > 0 && (
          <button type='submit' onClick={searchUser}>
            <AiOutlineSearch className='icon' />
          </button>
        )}
        <span className='vr'></span>
        <input
          type='text'
          placeholder='search'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </form>
      <div className='requests'>
        Requests: <span>{limit}/ 60 </span>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: grid;
  gap: 2rem;
  position: relative;
  form {
    display: grid;
    grid-template-columns: auto auto 1fr;
    background: white;
    box-shadow: var(--shadow);
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    .icon {
      font-size: 1.5rem;
      font-weight: bold;
    }
    input {
      border: none;
      padding: 0.25rem 0.5rem;
      font-size: 1.2rem;
      letter-spacing: 0.1rem;
      border: 2px solid transparent;
      border-radius: 5px;
    }
    input::placeholder {
      color: #6c6c6c;
      text-transform: capitalize;
    }
    input:focus {
      outline: none;
      border: 2px solid #77c3ec;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      flex-grow: 1.5;
      padding: 0.25rem 0.5rem;
      background: white;
      border: none;
      font-size: 1.05rem;
      border-radius: var(--radius);
      color: #6c6c6c;
      font-style: italic;
      text-transform: capitalize;
      letter-spacing: 0.1rem;
    }
    .vr {
      border-left: 2px solid #bebebe;
    }
  }
  .requests {
    display: flex;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    background: white;
    padding: 0 0.4rem;
    border-radius: 5px;
    letter-spacing: var(--spacing);
    span {
      color: black;
      border-radius: 5px;
      padding: 0.1rem 0.2rem;
    }
  }
  @media screen and (min-width: 760px) {
    grid-template-columns: 1fr max-content;
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
