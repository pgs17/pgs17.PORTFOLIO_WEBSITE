import React from 'react'
import './About.css'
import ME from '../..//assets/me-about.jpg'
import{GrUserExpert} from 'react-icons/gr'
import{SiSkillshare} from 'react-icons/si'
import{MdVisibility} from 'react-icons/md'
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
  <article>
  < SiSkillshare className="about_icon"/>
  <h5>Skills</h5>
  <small>kindly visit GITHUB for the projects and download CV</small>
  </article>


  <article>
  <GrUserExpert className="about_icon"/>
  <h5>Experience</h5>
  <small>3+ years</small>
  </article>


  <article>
  < MdVisibility className="about_icon"/>
  <h5>Page Visits </h5>
  <small>300+</small>
  </article>
</div>
<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda animi quos fugiat sequi laboriosam officiis deleniti, in unde modi? Optio amet enim, unde atque ratione, vel repellat beatae obcaecati dolor omnis, laboriosam natus recusandae neque.
</p>
<a href="#contact" className="btn btn-primary" > LETS TALK</a>
      </div>
    </div>
    </section>
  )
}

export default About

// about section so wrap it around section 