import React from 'react'
import './Portfolio.css'

// data for projects
const data = [
  {
    id: 1,
    title: 'Accidents in India(A ANALYSIS REPORT)',
    github: 'https://github.com/pgs17/Accidents-In-India-'
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
    title: 'Titanic Dataset Survival Prediction',
    github: 'https://github.com/pgs17/TiTanic-Survival-Prediction'
  },
   {
    id: 5,
    title: 'Machine Learning Kaggle Competition',
    github: 'https://github.com/pgs17/Kaggle-Playground-Notebooks'
  },
  {
    id: 6,
    title: 'Rest Api Using Nodejs And Express',
    github: 'https://github.com/pgs17/Gym-App-API'
  },
  {
    id: 7,
    title: 'text Summarizer using LLM MODELS',
    github: 'https://github.com/pgs17/Text-Summarizer'
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