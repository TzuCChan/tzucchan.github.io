import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/body_no_suit.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! My name is</h5>
        <h1>Leon</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header