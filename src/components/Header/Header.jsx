import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../../assets/me-1.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
   <header>
    <div className="container header_conatiner">
    <h4>Hello I am</h4>
    <h1>Priyanshu Gourav Sarangi</h1>
    <h5 className='text-light'>A STUDENT AT ODISHA UNIVERSITY OF TECHNOLOGY AND RESEARCH</h5>
    <CTA/>
<HeaderSocials/>
    <div className='me'>
      <img src={me} alt="me" />
    </div>
  

    </div>
   </header>
    
  )
}

export default Header

// header_container naming is used for in component css naming and since its header its wrapped around header