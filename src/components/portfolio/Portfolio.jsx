import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Art of Duck.jpg'
import IMG2 from '../../assets/Pop Culture Trivia.png'
import IMG3 from '../../assets/Three Arts.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Art of Duck UI',
    github: 'https://github.com/TzuCChan/Duck-react-API-UI-pattern',
    demo: 'http://localhost:3000/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Pop Culture Trivia',
    github: 'https://github.com/TzuCChan/Pop-Culture-Trivia',
    demo: 'http://127.0.0.1:5500'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Renaissance',
    github: 'https://github.com/TzuCChan/renaissance-react',
    demo: 'http://localhost:3000/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      {/* <h5>My Work</h5> */}
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio