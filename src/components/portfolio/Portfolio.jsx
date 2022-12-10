import React from 'react'
import './portfolio.css'
//import IMG1 from '../../assets/amajon.png'
//import IMG2 from '../../assets/jony-free-p.jpg'
//import IMG3 from '../../assets/taj.jpg'
import IMG1 from '../../assets/./img/1.png.png'
import IMG2 from '../../assets/./img/2.png.png'
import IMG3 from '../../assets/./img/3.png.png'
import IMG4 from '../../assets/./img/4.png.png'
import IMG5 from '../../assets/./img/5.png.png'
import IMG6 from '../../assets/./img/6.png.png'
import IMG7 from '../../assets/./img/7.png.png'
import IMG8 from '../../assets/./img/8.png.png'
import IMG9 from '../../assets/amajon.png'
import IMG10 from '../../assets/jony-free-p.jpg'
import IMG11 from '../../assets/taj.jpg'


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
            <img src="https://i.ibb.co/NCknHDp/profilecarsss.png" alt="" />



          </div>
          <h3>Damigari.com  </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony"className='btn'>Github</a>
            <a href="https://damigari.com/" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>


        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Online Bebsha-Lagbe </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony/bebsha-lagbe-jony"className='btn'>Github</a>
            <a href="https://stunning-narwhal-336632.netlify.app/" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>

        {/* update */}


        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src="https://i.ibb.co/PgX7RPC/islam.png" alt="" />
           
          </div>
          <h3>Islamic scholars  </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony"className='btn'>Github</a>
            <a href="https://darulmuttaquine.vercel.app/" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>
        {/* update 2 */}


        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src="https://i.ibb.co/RSn3KLf/DOCTORSPORTL.png" alt="" />

           
          </div>
          <h3>Doctors-portal  </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony/doctors-portal-client1"className='btn'>Github</a>
            <a href="https://doctors-portal-5f02b.web.app/" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>

        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Bank Management System </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony/HTML_5-Project"className='btn'>Github</a>
            <a href="https://zunaid-jony.github.io/bank/" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>
        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>List Of Countries </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony"className='btn'>Github</a>
            <a href="4 https://playful-creponne-9f8360.netlify.app/" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>
        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Search In Food With API </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony"className='btn'>Github</a>
            <a href="https://github.com/Zunaid-jony" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>

        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Shopping Cart </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony"className='btn'>Github</a>
            <a href="https://zunaid-jony.github.io/shopping-carts/" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>
       
        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>DEVELOPER SALARY </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony"className='btn'>Github</a>
            <a href="https://extraordinary-concha-0ae855.netlify.app/?fbclid=IwAR0eovkDguJ6vVKWCZDY_fFhnNoGv8OqI0sVj8aG1LgqOJbilHnIMKAzQqQ" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>
        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG8} alt="" />
          </div>
          <h3>This is a Portfolio_2 </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony"className='btn'>Github</a>
            <a href="https://github.com/Zunaid-jony" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>
        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG9} alt="" />
          </div>
          <h3>Amazon Online Shopping </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony"className='btn'>Github</a>
            <a href="https://github.com/Zunaid-jony" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>
        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG10} alt="" />
          </div>
          <h3>This is a Portfolio item title </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony"className='btn'>Github</a>
            <a href="https://github.com/Zunaid-jony" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>

        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG11} alt="" />
          </div>
          <h3>History Of Taj Mahal  </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Zunaid-jony"className='btn'>Github</a>
            <a href="https://github.com/Zunaid-jony" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
        </article>
        <article  className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG8} alt="" />
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