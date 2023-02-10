import './navbar.css';
import { Link } from 'react-scroll'
import Socials from '../socials/Socials';
import { useState } from 'react';


export const Navbar = () => {

const [navbar, setNavbar] = useState(false)

const changeBackground = () => {
    if(window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
}

window.addEventListener('scroll', changeBackground)

  return (
    <nav className={navbar ? "active" : ''}>
      <Socials/>
      
          <ul className='list'>
              <li>
                <Link to="home" 
                spy={true} 
                smooth="true"
                offset={-50} 
                duration={500} 
                className='list-item'
                > Home </Link>
                </li>
              <li>
                <Link to="about" 
                spy={true} 
                smooth="true"
                offset={0} 
                duration={500} 
                className='list-item'
                > About </Link>
                </li>
              <li>
                <Link to="portfolio" 
                spy={true} 
                smooth="true"
                offset={0} 
                duration={500} 
                className='list-item'
                > Projects </Link>
                </li>
              <li>
                <Link to="contact" 
                spy={true} 
                smooth="true"
                offset={0} 
                duration={500} 
                className='list-item'
                > Contact </Link>
                </li>                                   
           </ul> 

        

    </nav>
  )
}
