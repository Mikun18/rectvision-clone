import React from 'react'
import '../styles/offerings.css'

const Offerings = () => {
  return (
    <section className='offering-con'>
      <div className='offering'>
        <p className='title'>OFFERINGS</p>
        <h1>RectVision Offerings</h1>
        <p>Rectvision helps you organize your AI data process, end to end on a single perform</p>
      </div>

      <div className='offering'>
        <p className='title'>SOLUTIONS</p>
        <h1>Apply Computer Vision to Videos and Images</h1>
        <p>Rectvision lets you speed-up your data access with synthetic data, automatically label and classify your data, integrate AI models into an existing production enviroment, analyse the results and make business decisions based on data.</p>
      </div>
    </section>
  )
}

export default Offerings