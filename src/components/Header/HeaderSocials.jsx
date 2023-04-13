import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='Header__socials'>
        <a href="http://www.linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="http://www.github.com" target="_blank"><BsGithub/></a>
        <a href="http://www.instagram.com" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials

// react icons used import it from react icons /type imported and use it as single end html tag 