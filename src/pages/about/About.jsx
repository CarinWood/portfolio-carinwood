import "./about.css";
import profilepic from '../../assets/img/profilbild.jpg'
import { Link } from 'react-scroll'
import { useEffect, useState } from "react";

const About = () => {
  const [makeItShake, setMakeItShake] = useState(false)


  useEffect(() => {
    shakeButton()
  }, [])

  const shakeButton = () => {
    console.log(window.scrollY)
      if (window.scrollY > 500) {
        
        setMakeItShake(true)
      } else {
        setMakeItShake(false)
      }
  }

  window.addEventListener('scroll', shakeButton)



  return (
    <div id="about" className="about-wrapper">
          <h1 className="about-headline">About me</h1>
     
      <div className="about-container">

            <img className="profile-image" src={profilepic} alt="" />      
            <p className="about-text">
              I'm a full stack developer located in Gothenburg, Sweden. 
              I design and build web sites using Javascript and Typescript.
              <br/>
              <br/>
              <span className="responsive-text">I've always been someone who has both a creative and a logical side. 
              When I discovered web development, I realized it would be the perfect fit for me. 
              I can use my creative side to design and my logical side to code.
              <br/>
              <br/>
              </span>
              I'm interested in the entire full stack spectrum and would love to work on ambitious projects together with positive people.
              <br/> 
              <br/>
            
              { makeItShake &&
                <a href="https://carinwood-eng-cv.netlify.app/" target="_blank">
                <button className="work-together shakeme">To my resume / CV</button> 
                </a>
              }
            </p>        
      
      </div>


    </div>
  );
};

export default About;
