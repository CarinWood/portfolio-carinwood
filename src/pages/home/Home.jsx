import './home.css'
import TextAnimation from '../../components/TextAnimation';
import { Navbar } from '../../components/navbar/Navbar';
import MobileNav from '../../mobileNav/MobileNav';
import { FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";
import { Link } from 'react-scroll'





const Home = () => {
  return (
    <main id="home"> 
            <header>
                <Navbar/>
                <MobileNav/>
                <div className='header-box'>
                  
                        <p className='hello'>Hello, I'm</p>
                        <h1 className='headline'><TextAnimation/></h1>
                        <p className='subtext'>A Creative Web Designer & Full Stack Developer</p>
                        <p className='subtext2'>Full Stack Developer</p>
                        
                
                </div>
               
            </header>
      

    </main>
  )
   
}

export default Home