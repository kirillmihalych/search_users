import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md'

const Card = () => {
  const { user } = useGlobalContext()

  const {
    login,
    avatar_url,
    html_url,
    location,
    blog,
    company,
    twitter_username,
    bio,
  } = user

  return (
    <Wrapper>
      <header>
        <div className='flex-wrapper'>
          <img src={avatar_url} alt={login} />
          <div>
            <h3>{login}</h3>
            <p className='username'>@{twitter_username || 'jhon doe'}</p>
          </div>
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className='bio'>{bio}</p>
      <div className='links'>
        <p>
          <MdBusiness className='icon'></MdBusiness>
          {company}
        </p>
        <p>
          <MdLocationOn className='icon'></MdLocationOn>{' '}
          {location || 'universe'}
        </p>
        <p>
          <MdLink className='icon'></MdLink>
          <a href={`https://${blog}`}>{blog}</a>
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background: var(--white);
  padding: 1.5rem 2rem;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: relative;
  box-shadow: var(--shadow);
  &::before {
    content: 'user';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--white);
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }
  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 130px;
      height: 130px;
      border-radius: 5px;
      border: 3px solid var(--black);
    }
    .username {
      background: var(--black);
      color: #eebc1d;
      padding: 0.25rem 0.5rem;
      margin-top: 0.5rem;
    }
    a {
      height: 100%;
      font-size: 1rem;
      border: 2px solid black;
      background: #eebc1d;
      padding: 0.15rem 0.5rem;
      color: black;
      text-transform: capitalize;
      &:hover {
        background: var(--black);
        color: #eebc1d;
        transition: var(--trasition);
      }
    }
  }
  .bio {
    color: #505050;
    letter-spacing: 0.15rem;
  }
  .links {
    p,
    a {
      display: flex;
      align-items: center;
      font-style: italic;
      color: #505050;
      text-decoration: 2px underline black;
      letter-spacing: 0.05rem;
    }
    .icon {
      align-self: center;
      color: #eebc1d;
      background: black;
      font-size: 1.25rem;
      padding: 0.1rem;
      border-radius: 2px;
      margin-right: 0.5rem;
    }
  }
`

export default Card
