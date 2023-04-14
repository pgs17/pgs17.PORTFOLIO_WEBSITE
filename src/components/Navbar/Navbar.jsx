import React, { useState } from 'react'
import './Navbar.css'
import {AiOutlineHome}from 'react-icons/ai'
import{SiAboutdotme} from 'react-icons/si'
import {BiBook} from 'react-icons/bi'
import{MdContactPage} from 'react-icons/md'

const Navbar = () => {
  const [active , setactive] = useState('#');
  return (
   <nav>
    <a href="#" onClick={() => setactive('#')}  className={active==='#' ? 'active': ''}><AiOutlineHome/></a>
    <a href="#about" onClick={()=>setactive('#about')} className={active==='#about' ? 'active' : ''} >
      <SiAboutdotme/></a>
    <a href="#experience"  onClick={()=>setactive('#experience')} className={active==='#experience' ? 'active': ''} >
      <BiBook /></a>
    <a href="#contact" onClick={()=>setactive('#contact')} className={active==='#contact' ? 'active' : ''}  ><MdContactPage /></a>
   </nav>
    
  )
}

export default Navbar

// since its navbar its wrapped around html schematic tag nav #id of place it should go
// active class so to show which page is active we have to update it when we change to some other page