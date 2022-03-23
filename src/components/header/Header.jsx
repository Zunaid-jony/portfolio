import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA'
import ME from '../../assets/jony.png.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5> Hell I'm</h5>
            <h1>JONY MIAH</h1>
            <h5 className='text-light'> Fullstack Developer </h5>
            <CTA></CTA>
            <HeaderSocials></HeaderSocials>

            <div className="me">
              <img src={ME} alt="me" />
            </div>
            <a href="#contact" className='scroll_down'> Scroll Down</a>
         
        </div>
    </header>
  )
}

export default Header