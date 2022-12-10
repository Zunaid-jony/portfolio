import React from 'react'
import './cta.css'
import './header.css'
import cv from '../../assets/abc.pdf'
import cv1 from '../../assets/Md-Jony-Miah.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        
        <a href={cv1} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'> Let's Talk</a>
       
    </div>
  )
}

export default CTA