import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bgq60oo', 'template_t65avuj', form.current, '0OKrk8J3LQwihnnO5')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'> </MdOutlineEmail>
            <h4>Email</h4>
            <h5>jony35-260@diu.edu.bd</h5>
            <a href="mailto:jony35-260@diu.edu.bd" target='_blank'>Send a message</a>
          </article>
          
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'></RiMessengerLine>
            <h4>Messenger</h4>
            <h5>Md Jony Hossin</h5>
            <a href="https://m.me/md.jonyhossain.589" target='_blank'>Send a message</a>
          </article>
          

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'></BsWhatsapp>
            <h4>WhatsApp</h4>
            <h5>+8801627392810 </h5>
            <a href="https://api.whatsapp.com/send?phone+8801627392810" target='_blank'>
              Send a message</a>
          </article>
          
        </div>
        {/** end of contact options */}
        <form ref={form} onSubmit={sendEmail }>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Massage</button>
        </form>

      </div>

      
      
   </section>
  )
}

export default Contact