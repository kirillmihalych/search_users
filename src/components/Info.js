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

  const items = [
    {
      id: 1,
      label: 'repos',
      icon: <AiOutlineBook className='icon' />,
      value: repos,
    },
    {
      id: 2,
      label: 'followers',
      icon: <AiOutlineUsergroupAdd className='icon' />,
      value: followers,
    },
    {
      id: 3,
      label: 'following',
      icon: <AiOutlineUserAdd className='icon' />,
      value: following,
    },
    {
      id: 4,
      label: 'gists',
      icon: <GoGist className='icon' />,
      value: gists,
    },
  ]

  return (
    <Wrapper>
      {items.map((item) => {
        return <Item key={item.id} {...item} />
      })}
    </Wrapper>
  )
}

const Item = ({ label, icon, value }) => {
  return (
    <article>
      <span>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
  margin: 5rem 0;
  article {
    /* border: 2px solid black; */
    box-shadow: var(--shadow);
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
    color: #a0a0a0;
  }

  .icon {
    font-size: 3rem;
    color: #0aa0e3;
  }
`

export default Info
