import React from 'react'
import './Contact.css'
import {MdAttachEmail} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

import {BsGithub} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'> 
    <h5>GET IN TOUCH WITH ME</h5>
         <h2> Contact Me</h2>

<div className=" container  contact_container">
<div className="contact_options">
  <article className="contact_option">
     <MdAttachEmail className='icons'/>
    <h4>Email</h4>
    <h5>SarangiPriyanshu@gmail.com</h5>
    <a href="mailto:sarangipriyanshu@gmail.com">Send A Mail</a>
  </article>

  <article className="contact_option">
      <BsLinkedin  className='icons'/>
    <h4>Linkedin</h4>
    <h5>Priyanshu Sarangi</h5>
    <a href="https://www.linkedin.com/in/priyanshu-gourav-sarangi-5644b8112/">Connect On Linkedin</a>
  </article>


  <article className="contact_option">
     < AiFillInstagram className='icons'/>
    <h4>Instagram</h4>
    <h5>Toxic_Priyanshu</h5>
    <a href="https://www.instagram.com/toxic_priyanshu/">Drop on My INSTAGRAM</a>
  </article>


  <article className="contact_option">
     <  BsGithub className='icons'/>
    <h4>Instagram</h4>
    <h5>Toxic_Priyanshu</h5>
    <a href=" https://github.com/pgs17 ">Drop on My GITHUB</a>
  </article>
</div>
</div>
    </section>

    
  )
}

export default Contact
