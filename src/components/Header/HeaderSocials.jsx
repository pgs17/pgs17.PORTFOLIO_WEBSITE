import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='Header__socials'>
        <a href=" https://www.linkedin.com/in/priyanshu-gourav-sarangi-5644b8112/" target="_blank"><BsLinkedin/></a>
        <a href=" https://github.com/pgs17" target="_blank"><BsGithub/></a>
        <a href=" https://www.instagram.com/toxic_priyanshu/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials

// react icons used import it from react icons /type imported and use it as single end html tag 