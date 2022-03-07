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
  /* margin-top: 5rem; */
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: relative;
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
    height: 350px;
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
    width: 55px;
    border-radius: 50%;
    object-fit: cover;
  }
  h4 {
    margin-bottom: 0;
  }
  .info {
    padding: 1rem 2rem;
  }
`

export default Followers
