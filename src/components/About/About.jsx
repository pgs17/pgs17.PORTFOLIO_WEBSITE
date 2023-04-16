import React from 'react'
import './About.css'
import ME from '../..//assets/ME_ABOUT1.png'
// import{GrUserExpert} from 'react-icons/gr'
import{SiSkillshare} from 'react-icons/si'
// import{MdVisibility} from 'react-icons/md'
const About = () => {
  return (
    <section id='about'>
    
    <h5>Get to know me</h5>
    <h2>ABOUT ME !</h2>

    <div className="container about_container">

      <div className="about_me">
        <div className="about_me_img">
          <img src={ME} alt="About me" />
          {/* image import it always  */}
        </div>
      </div>
      <div className="about_content">
<div className="about_cards">
  {/* each card has an article  */}
  <article className='about_card'>
  < SiSkillshare className="about_icon"/>
  <h5>Skills</h5>
  <strong>Learned C/C++ ,HTML,CSS,JAVASCRIPT,REACT,NODEJS,MONGO-DB,EXPRESS.Kindly visit my GITHUB for projects </strong>
  </article>


  {/* <article className='about_card'>
  <GrUserExpert className="about_icon"/>
  <h5>Experience</h5>
  <small>3+ years</small>
  </article> */}


  {/* <article className='about_card'>
  < MdVisibility className="about_icon"/>
  <h5>Page Visits </h5>
  <small>300+</small>
  </article> */}
</div>
<p>
  A student of Odisha University of Technology and Research with keen interest in Development and Research. An avid learner and trying to get better each day. Keep tabs on different sports like f1 and football and cricket,etc. and want to use my skills for betterment. Open to internships of various kinds so that I can understand my abilities better.Maybe listens to a lot of music
</p>
<a href="#contact" className="btn btn-primary" > LETS TALK</a>
      </div>
    </div>
    </section>
  )
}

export default About

// about section so wrap it around section 