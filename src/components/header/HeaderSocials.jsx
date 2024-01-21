import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/leon-tzu-chiang-chan/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/TzuCChan" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials