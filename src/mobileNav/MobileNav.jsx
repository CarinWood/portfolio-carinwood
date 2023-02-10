import React, { useState } from 'react'
import './mobileNav.css'
import { GrMenu } from 'react-icons/gr';
import { Link } from 'react-scroll'

const MobileNav = () => {
    const [openMenu, setOpenMenu] = useState(false)


    const openMenuFunc = () => {
        setOpenMenu(!openMenu)
       
    }



  return (
    <div className='mobile-nav'>
        <GrMenu className='menu' onClick={() => openMenuFunc()}/>
        <ul className={openMenu ? 'nav-links open': 'nav-links'}>
            <li className={openMenu ? "mobile-link fade": "mobile-link"}>
            <Link 
                onClick={() => openMenuFunc()}
                to="home" 
                spy={true} 
                smooth="true"
                offset={-50} 
                duration={500} 
                className='list-item'
                > Home
            </Link>
            </li>
            <li className={openMenu ? "mobile-link fade": "mobile-link"}>  
            <Link 
                onClick={() => openMenuFunc()}
                to="about" 
                spy={true} 
                smooth="true"
                offset={60} 
                duration={500} 
                className='list-item'
                > About 
            </Link>
              </li>
            <li className={openMenu ? "mobile-link fade": "mobile-link"}> 
            <Link 
                onClick={() => openMenuFunc()}
                to="portfolio" 
                spy={true} 
                smooth="true"
                offset={0} 
                duration={500} 
                className='list-item'
                > Portfolio 
            </Link>
            </li>
            <li className={openMenu ? "mobile-link fade": "mobile-link"}>
            <Link 
                onClick={() => openMenuFunc()}
                to="contact" 
                spy={true} 
                smooth="true"
                offset={50} 
                duration={500} 
                className='list-item'
                > Contact 
            </Link>
            </li>
        </ul>


    </div>
  )
}

export default MobileNav