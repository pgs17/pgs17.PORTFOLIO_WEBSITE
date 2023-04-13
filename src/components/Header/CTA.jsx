import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
   <div className="CTA">
<a href={CV} download className='btn'>DOWNLOAD CV</a>
<a href="#contact" className='btn btn-primary'>CONTACT US</a>
   </div>
    
  )
}

export default CTA