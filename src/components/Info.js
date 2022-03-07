import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import {
  AiOutlineBook,
  AiOutlineUserAdd,
  AiOutlineUsergroupAdd,
} from 'react-icons/ai'
import { GoGist } from 'react-icons/go'

const Info = () => {
  const { user } = useGlobalContext()

  const {
    public_repos: repos,
    public_gists: gists,
    followers,
    following,
  } = user[0]

  return (
    <Wrapper>
      <article>
        <span>
          <AiOutlineBook className='icon' />
        </span>
        <div>
          <h3>{repos}</h3>
          <p>repos</p>
        </div>
      </article>
      <article>
        <span>
          <AiOutlineUsergroupAdd className='icon' />
        </span>
        <div>
          <h3>{followers}</h3>
          <p>followers</p>
        </div>
      </article>
      <article>
        <span>
          <AiOutlineUserAdd className='icon' />
        </span>
        <div>
          <h3>{following}</h3>
          <p>following</p>
        </div>
      </article>
      <article>
        <span>
          <GoGist className='icon' />
        </span>
        <div>
          <h3>{gists}</h3>
          <p>gists</p>
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  article {
    border: 2px solid black;
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
    }
  }
  h3,
  p {
    margin-bottom: 0;
  }
  p {
    text-transform: capitalize;
  }

  .icon {
    font-size: 3rem;
  }
`

export default Info
