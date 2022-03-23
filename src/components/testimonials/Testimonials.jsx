import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/prionto.jpg'
import AVTR2 from '../../assets/sahed.jpg'
import AVTR3 from '../../assets/arju.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';

import 'swiper/css/pagination';



const data=[
  {
    avatar: AVTR1,
    name:'Prionto',
    review:' Working with Jony at a college project is wonderful. He is responsive, flexible. He is great at thinking about the projects making recommendations for improvements'

  },
  {
    avatar: AVTR2,
    name:'Shahed Talukder',
    review:' Working with Jony on a college project is wonderful. He is responsive, flexible. He is great at thinking about the projects making recommendations for improvements'

  },
  {
    avatar: AVTR3,
    name:'Anisur Rohman',
    review:' Working with Jony on a college project is wonderful. He is responsive, flexible. He is great at thinking about the projects making recommendations for improvements'

  },
]

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
     
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index ) =>{
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={avatar}/>
                </div>
                  <h5 className='client_name'> {name} </h5>
                  <small className='client_review'>{review} </small>

              </SwiperSlide >

            )

          } )   
        }
        
        </Swiper>
    </section>
  )
}
