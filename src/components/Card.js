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
  } = user[0]

  return (
    <Wrapper>
      <header>
        <div className='flex-wrapper'>
          <img src={avatar_url} alt={login} />
          <div>
            <h3>{login}</h3>
            <p>@{twitter_username || 'jhon doe'}</p>
          </div>
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className='bio'>{bio}</p>
      <div className='links'>
        <p>
          <MdBusiness className='icon'></MdBusiness> {company}
        </p>
        <p>
          <MdLocationOn className='icon'></MdLocationOn>{' '}
          {location || 'universe'}
        </p>
        <a href={`https://${blog}`}>
          <MdLink className='icon'></MdLink>
          {blog}
        </a>
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
  height: 350px;
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
    }
    a {
      height: 100%;
      font-size: 1.5rem;
      border: 1px solid #0aa0e3;
      padding: 0.15rem 0.5rem;
      color: #0aa0e3;
      border-radius: var(--radius);
      &:hover {
        background: #0aa0e3;
        color: var(--white);
        transition: 0.1s;
      }
    }
    .flex-wrapper {
      display: flex;
      div {
        margin-left: 2rem;
      }
      p {
        color: #6c6c6c;
      }
    }
  }
  .bio {
    color: #6c6c6c;
  }
  .links {
    color: #6c6c6c;
    p,
    a {
      display: flex;
      align-items: center;
    }
    a {
      color: #0aa0e3;
    }
    .icon {
      color: #6c6c6c;
      margin-right: 0.5rem;
    }
  }
`

export default Card
