import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Followers = () => {
  const { followers } = useGlobalContext()

  return (
    <Wrapper>
      <div className='followers'>
        {followers.map((follower, index) => {
          const { avatar_url: avatar, login, html_url } = follower
          return (
            <article key={index} className='flex-wrapper'>
              <img src={avatar} alt={login} />
              <div className='info'>
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background: var(--white);
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: relative;
  box-shadow: var(--shadow);
  &::before {
    content: 'followers';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--white);
    padding: 0.15rem 0.4rem;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }
  .followers {
    overflow: scroll;
    height: 500px;
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    gap: 1rem;
  }
  article {
    padding: 0.15rem 0.5rem;
    display: flex;
    align-items: center;
  }
  img {
    width: 65px;
    border-radius: 50%;
    border: 2px solid black;
    object-fit: cover;
  }
  h4 {
    margin-bottom: 0.25rem;
    font-size: 1.15rem;
  }
  .info {
    padding: 1rem 2rem;
  }
  a {
    display: inline-block;
    color: #eebc1d;
    margin-top: 0.25rem;
    background: black;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
  }
  a:hover {
    transition: var(--transition);
    color: white;
  }
`

export default Followers
