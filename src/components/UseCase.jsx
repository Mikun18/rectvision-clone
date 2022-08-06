import React from 'react'
import '../styles/usecase.css'

const UseCase = () => {
  return (
    <section className='usecase-con'>
        <article className='use-case'>
            <p className='title'>USE CASES</p>
            <h1>RectVision Use Cases</h1>
            <p>Rectvision lets you create real-time AI applications with pre-built modules. Skip writing codes from scratch and use intuitive visual programming. Use state-of-the-art algorithms and features you need to automate business tasks with human level AI vision. Build out logic, from generating to production and deploy at the push of a button with our end-to-end platform.</p>
        </article>

        <div className='basketball'>
            <img src="./Images/Basketball.gif" alt="BasketBall gif" />
            <div className='sub-basketball'>
              <p className='sport'>Sports/Football</p>
              <h1>Human Activity Recognition</h1>
              <p className='basketball-text'>Human action recognition aims to recognize who is performing an action in an unknown sport video sequence, determine the duration of the action, and identify the action type. The main idea in football is to monitor player performance and this implies recognize the player, track his movements, recognize the actions taken, compare different actions, compare different types and skills of acting performance, or perform automated statistical analysis.</p>
              <button className='basketball-btn'>Explore</button>
            </div>
        </div>

        <div className='pricing'>
            <img src="./Images/PricingSignUpBannerImage.1d4fd251.svg" alt="pricing" />
            <div>
              <h2>Ready to take your data to the next level?</h2>
              <form action="" className='pricing-form'>
                <input type="email" placeholder='Enter Your Email Address'/>
                <button>Join the waitlist</button>
              </form>
            </div>
        </div>
    </section>
  )
}

export default UseCase