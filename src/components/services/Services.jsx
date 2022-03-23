import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const services = () => {
  return (
    <section id='services'>
      
     <h5>What I Offer </h5>
     <h2>Services</h2>
     <div className="container services_container">
       <article className='service'>
         <div className="service_head">
           <h3>UI/UX Design </h3>
         </div>
         <ul className='service_list'>
           <li >
             <BsCheck className='service_list-icon'></BsCheck> 
             <p> Optimizing the user experience.</p>
           
           </li>

           <li >
             <BsCheck className='service_list-icon'></BsCheck> 
             <p> Using HTML, JavaScript and CSS to bring concepts to life.</p>
           
           </li>
           <li >
             <BsCheck className='service_list-icon'></BsCheck> 
             <p> Developing and maintaining the user interface.</p>
           
           </li>
           <li >
             <BsCheck className='service_list-icon'></BsCheck> 
             <p>Implementing design on mobile websites.</p>
           
           </li>
           <li >
             <BsCheck className='service_list-icon'></BsCheck> 
             <p> Managing software workflow.</p>
           
           </li>
          
         </ul>

       </article>
       {/** END ui/ux ================= */}


       <article className='service'>
         <div className="service_head">
           <h3>Web Development </h3>
         </div>
         <ul className='service_list'>
           <li >
             <BsCheck className='service_list-icon'></BsCheck> 
             <p> Conducting user research.</p>
           
           </li>

           <li >
             <BsCheck className='service_list-icon'></BsCheck> 
             <p> Creating user personas.</p>
           
           </li>
           <li >
             <BsCheck className='service_list-icon'></BsCheck> 
             <p> Determining the information architecture of a digital product.</p>
           
           </li>
           <li >
             <BsCheck className='service_list-icon'></BsCheck> 
             <p> Lorem ipsum dolor sit amet, consectetur elit.</p>
           
           </li>
           <li >
             <BsCheck className='service_list-icon'></BsCheck> 
             <p> Designing user flows and wireframes.</p>
           
           </li>
           <li >
             <BsCheck className='service_list-icon'></BsCheck> 
             <p> Creating prototypes.</p>
           
           </li>
          
         </ul>

       </article>
       {/**  exit  web development ====================*/}

       <article className='service'>
         <div className="service_head">
           <h3>Content Creation  </h3>
         </div>
         <ul className='service_list'>
           <li >
             <BsCheck className='service_list-icon'></BsCheck> 
             <p> Designing user interfaces and navigation menus.</p>
           
           </li>

           <li >
             <BsCheck className='service_list-icon'></BsCheck> 
             <p>Writing and reviewing code for sites, typically HTML, XML, or JavaScript.</p>
           
           </li>
           <li >
             <BsCheck className='service_list-icon'></BsCheck> 
             <p> Integrating multimedia content onto a site.</p>
           
           </li>
           <li >
             <BsCheck className='service_list-icon'></BsCheck> 
             <p>Troubleshooting problems with performance or user experience.</p>
           
           </li>
           <li >
             <BsCheck className='service_list-icon'></BsCheck> 
             <p> Lorem ipsum dolor sit amet, consectetur elit.</p>
           
           </li>
          
         </ul>

       </article>
       {/**exit ===================== */}

     </div>
    </section>
  )
}

export default services