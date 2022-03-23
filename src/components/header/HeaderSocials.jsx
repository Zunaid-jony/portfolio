import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/md-jony-miah-68a164176/" target="_blank"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com/Zunaid-jony" target="_blank"> <FaGithub></FaGithub></a>
        <a href="https://dribbble.com" target="_blank"><FiDribbble></FiDribbble></a>
    </div>
  )
}

export default HeaderSocials