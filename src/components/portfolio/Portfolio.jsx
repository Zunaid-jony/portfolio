import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/amajon.png'
import IMG2 from '../../assets/jony-free-p.jpg'
import IMG3 from '../../assets/taj.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
{/**
const data=[
  id: 1,
  image:IMG1,
  title:'bebosalagbbe',
  github:'www.git...',
  demo:'link...'
]
*/}

const Portfolio = () => { 
  return (
    
    <section id='portfolio'>
      <h5>My Recent Work </h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Shop Amazon Online Shopping </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony/ena-john-simple"className='btn'>Github</a>
            <a href="https://youthful-bohr-f64a61.netlify.app/" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>

        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>my portfolio website jony </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony/web-portfolio"className='btn'>Github</a>
            <a href="https://zunaid-jony.github.io/web-portfolio/" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>
        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Taj Mahal Agra India History</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony/HTML_5-Project"className='btn'>Github</a>
            <a href="https://zunaid-jony.github.io/HTML_5-Project/" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>
        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a Portfolio item title </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony"className='btn'>Github</a>
            <a href="https://github.com/Zunaid-jony" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>
        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a Portfolio item title </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony"className='btn'>Github</a>
            <a href="https://github.com/Zunaid-jony" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>
        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a Portfolio item title </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony"className='btn'>Github</a>
            <a href="https://github.com/Zunaid-jony" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>



      </div>
    </section>
  )
}

export default Portfolio