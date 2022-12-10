//rafce
import React from 'react'
import './About.css'
import ME from '../../assets/about2.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2> About Me </h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image"/>
          </div>

        </div>
        <div className="about_content">
          <div className="about_cards">
           <article className='about_card'>
             <FaAward className='about_icon'></FaAward>
             <h5>Experience </h5>
             <small>2+ Years Working </small>
           </article>

           <article className='about_card'>
             <FaUsers className='about_icon'></FaUsers>
             <h5>Clients </h5>
             <small>2+ worldwide </small>
           </article>

           <article className='about_card'>
         <AiFillFolderOpen className='about_icon'></AiFillFolderOpen>
             <h5>Project </h5>
             <small>20+ completed </small>
           </article>
          </div>
          <p>I am Md Jony Miah. I’ve been working on web app development for two years now, while recently graduated from university. Had my own projects, coded mostly in JavaScript and Python. I learned a lot, both in college and while working on the apps. Now I am looking for a job.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
      
      
      </section>
  )
}

export default About