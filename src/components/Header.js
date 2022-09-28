import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg" alt='logo' />

        <NavMenu>
          <a>
            <img src='/images/home-icon.svg' alt='home' />
            <span>HOME</span>
          </a>

          <a>
            <img src='/images/search-icon.svg' alt='home' />
            <span>SEARCH</span>
          </a>

          <a>
            <img src='/images/watchlist-icon.svg' alt='home' />
            <span>WATCHLIST</span>
          </a>

          <a>
            <img src='/images/original-icon.svg' alt='home' />
            <span>ORIGINALS</span>
          </a>

          <a>
            <img src='/images/movie-icon.svg' alt='home' />
            <span>MOVIES</span>
          </a>

          <a>
            <img src='/images/series-icon.svg' alt='home' />
            <span>SERIES</span>
          </a>

        </NavMenu>

        <UserImg src="/images/mine.jpeg" alt="ProfileImg" />

    </Nav>
   
  )
}

export default Header

const Nav = styled.nav`
    background: #090b13;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
  overflow-x: hidden;

`

const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 50px;
  align-items: center;
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    // justify-content: center;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        // top: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-orign: left center;
        transition: all .2s ease-in;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
  border-radius: 50%;
`