import React from 'react'
import '../styles/home.css'
import Offerings from './Offerings'
import Slide from './Slider'
import UseCase from './UseCase'
import Footer from './Footer'

const Home = () => {
  return (
    <section>
      <div className='hero-page'>
        <div className='hero-page-flex'>
          <div className='hero-text'>
              <h1>Build AI Product Out Of Data</h1>
              <p>A No-Code/Low-code AI platform</p>
          </div>

          <form action="" className='hero-form'>
              <input type="email" placeholder='Enter Your Email Address'/>
              <button>Join the waitlist</button>
          </form>
        </div>

          <img src="./Images/Rect_landing.gif" alt="rect gif" />

      </div>
        <div>
          <Offerings />
          <Slide />
          <UseCase />
          <Footer />
        </div>
    </section>
  )
}

export default Home