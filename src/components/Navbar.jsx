import React, {useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/navbar.css'

const Navbar = () => {

    return (
        <section>
            <div className='navbar'>
              <Link to='/'><img src="./Images/logo.webp" alt="Rectvision Logo" /></Link>
               <div className='navigators'>
                    <Link to='#' className='nav-item'>Community</Link> 
                    <Link to='Pricing' className='nav-item'>Pricing</Link> 
                    <Link to='Career' className='nav-item'>Careers</Link> 
                    <Link to='Contact' className='nav-item'>Contact Us</Link> 
               </div> 
               <div className='nav-btn'>
                    <Link to='/' className='nav-item'>Log in</Link>
                    <button className='demo-btn'>Request Demo</button>
               </div>
             </div>

             <div style={{position:'sticky', top:'0'}}>
                <SmallerNavbar />
             </div>


        <div>
            <Outlet />
        </div>
    </section>
  )
}

const SmallerNavbar = () => {

    const [showModal, setShowModal] = useState(false);
    
    return (
        <section>
            <div className='smaller-nav'>
                <Link to='/'><img src="./Images/logo.webp" alt="Rectvison Logo" /></Link>
                <FontAwesomeIcon icon={faBars} className='bars-icon' onClick={() => setShowModal(true)}/>
            </div>
                <div>
                    <AnimatePresence>
                        {showModal && <NavModal setShowModal={setShowModal}/>}
                    </AnimatePresence>
                </div>
        </section>
    )
}

const NavModal = ({setShowModal}) => {

    const modalVariant = {
        hidden: {
            x: '100vw'
        },
        visible: {
            x: 0,
            transition: {duration: 0.5}
        },
        close: {
            x: '100vw',
            transition: {duration: 0.5}
        }
    }

    return(
        <motion.section className='nav-modal-bg' variants={modalVariant} animate='visible' initial='hidden' exit='close'>
            <div className='nav-modal'>
                <div className='nav-modal-header'>
                    <Link to='/'><img src="./Images/logo.webp" alt="Rectvision Logo" /></Link>
                    <FontAwesomeIcon icon={faXmark} className='cancel-logo' onClick={() => setShowModal(false)}/>
                </div>

                <div>
                    <Link to ='pricing' className='nav-modal-item'>Pricing</Link>
                    <Link to='career' className='nav-modal-item'>Careers</Link>
                    <Link to='contact' className='nav-modal-item'>Contact Us</Link>
                    <Link to='/' className='nav-modal-item'>Log in</Link>
                    <button className='request-btn'>Request Demo</button>
                </div>
            </div>
        </motion.section>
    )
}

export default Navbar