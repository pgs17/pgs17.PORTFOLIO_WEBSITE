import React from 'react'
import './Experience.css'
import{BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
  
    <section id='experience'> 
    <h5>Skills Possessed by Me </h5>
    <h2>My Experience</h2>
    

    <div className="container experience_container">
      <div className="frontend_experience">
       <h3>FRONTEND SKILLS</h3>
       <div className="experience_content">
         <article className='experience_details'>
          <BsPatchCheckFill className='icon'/>
          <h4>HTML</h4>
          <small className='text-light'> Intermediate</small>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill  className='icon'/>
          <h4>CSS</h4>
          <small className='text-light'>Intermediate</small>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill className='icon'/>
          <h4>JAVASCRIPT</h4>
          <small className='text-light'>Intermediate</small>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill className='icon'/>
          <h4>TAILWIND CSS</h4>
          <small className='text-light'>Intermediate</small>
           </article>
          <article className='experience_details'>
          <BsPatchCheckFill className='icon'/>
          <h4>REACT JS</h4>
          <small className='text-light'>Starter</small>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill className='icon'/>
          <h4>MATERIAL UI</h4>
          <small className='text-light'>Starter</small>
         </article>
       </div>
      </div>
      <div className="backend_experience">
        <h3>BACKEND SKILLS</h3>
        <div className="experience_content">
        <article className='experience_details'>
          <BsPatchCheckFill className='icon'/>
          <h4>NODE JS</h4>
          <small className='text-light'> Intermediate</small>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill className='icon'/>
          <h4>EXPRESSS JS</h4>
          <small className='text-light'> Intermediate</small>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill className='icon'/>
          <h4>MYSQL</h4>
          <small className='text-light'>Basic</small>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill className='icon'/>
          <h4>MONGO DB</h4>
          <small className='text-light'> Intermediate</small>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill className='icon'/>
          <h4>PYTHON(DJANGO)</h4>
          <small className='text-light'> Intermediate</small>
         </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience