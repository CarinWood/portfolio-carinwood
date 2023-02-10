import React from 'react'
import './socials.css'
import { FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";


const Socials = () => {
  return (
    
    <section className='socials-section'>
        <a href="https://github.com/CarinWood" target="_blank" className='github'>
          <FiGithub/>
        </a>
        <a href="https://www.linkedin.com/in/carin-wood/" target="_blank" className='linkedin'>
          <FiLinkedin/>
        </a>
        <a href="https://www.youtube.com/channel/UCTSlUc6-CsI08YtmULq6fng" target="_blank" className='youtube'>
          <FiYoutube/>
        </a>
    </section>
  )
}

export default Socials