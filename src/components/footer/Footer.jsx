import React from 'react'
//import CTA from '../header/CTA'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>MD JONY</a>
      <ul className='permalinks'>
        <li><a href="#">Home </a></li>
        <li><a href="#about">About </a></li>
        <li><a href="#experience">Experience </a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>       
        <li><a href="#testimonials">Testimonials </a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
          <a href="https://www.facebook.com/md.jonyhossain.589"> <FaFacebookF></FaFacebookF></a>
          <a href="https://www.instagram.com/direct/inbox/"> <FiInstagram></FiInstagram></a>
          <a href="https//:twitter.com"> <IoLogoTwitter></IoLogoTwitter></a>
        </div>

        <div className="footer_copyright">
          <small>&cony;jony.all rights reserved </small>

        </div>
    </footer>

  )
}

export default Footer