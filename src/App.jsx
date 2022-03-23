import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experince from './components/experince/Experince'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import { Testimonials } from './components/testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experince></Experince>
      <Services></Services>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    
     
    </div>
  )
}

export default App