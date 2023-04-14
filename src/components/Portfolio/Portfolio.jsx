import React from 'react'
import './Portfolio.css'

// data for projects
const data = [
  {
    id: 1,
    title: 'Blog Site',
    github: 'https://github.com/pgs17'
  },
  {
    id: 2,
    title: 'Blog Site',
    github: 'https://github.com/pgs17'
  },
  {
    id: 3,
    title: 'Blog Site',
    github: 'https://github.com/pgs17'
  },
  {
    id: 4,
    title: 'Blog Site',
    github: 'https://github.com/pgs17'
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