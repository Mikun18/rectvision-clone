import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <section className='footer'>
        <div> <img src="./Images/logo.webp" alt="Logo" className='footer-logo'/> </div>
        <div className='footer-list'>
            <h4>Community</h4>
            <p>Blog</p>
            <p>Documentation</p>
        </div>

        <div className='footer-list'>
            <h4>Company</h4>
            <p>Careers</p>
            <p>Contact us</p>
            <p>Request a demo</p>
        </div>

        <div className='footer-list'>
            <h4>Pricing</h4>
            <p>Brass</p>
            <p>Bronze</p>
            <p>Sliver(Hybrid)</p>
            <p>Gold(Custom)</p>
        </div>

        <div className='footer-list'>
            <h4>Contact Us</h4>
            <p>+234 800 000 8008</p>
            <div>
                <img src="./Images/linkedin-brands.svg" alt="linkedin" className='media'/>
                <img src="./Images/instagram-brands.svg" alt="instagram" className='media'/>
                <img src="./Images/twitter-brands.svg" alt="twitter" className='media'/>
            </div>
        </div>
    </section>
  )
}

export default Footer