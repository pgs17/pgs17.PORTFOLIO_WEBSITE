import React from 'react'
import './Portfolio.css'

// data for projects
const data = [
  {
    id: 1,
    title: 'Bank Web',
    github: ' https://github.com/pgs17/Bank_Web'
  },
  {
    id: 2,
    title: 'CUE_CARD',
    github: ' https://github.com/pgs17/CUE-CARD'
  },
  {
    id: 3,
    title: ' Digital System Design ',
    github: ' https://github.com/pgs17/Verilog'
  },
  {
    id: 4,
    title: 'Football Blog Site',
    github: 'https://github.com/pgs17/React-js'
  },
]

const Portfolio = () => {
  return (

    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className=" container container_portfolio">
       {
        data.map(({id,title,github}) => {
          return(
            <article key={id} className='portfolio_item'>
              <h3>{title}</h3>
              <a href={github} className='btn'>Github</a>
            </article>
          )
        })
       }


      </div>

    </section>
  )
}

export default Portfolio


// hardcoded the portfolios for style then map it