import './contact.css';
import Info from '../../components/contactInfo/Info';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Popup from '../../components/popup/Popup';
import { AiOutlineMail } from "react-icons/ai";



const Contact = () => {
  const [popup, setPopup] = useState(false)
  const form = useRef();



  const sendEmail = (e) => {
    e.preventDefault();
    setPopup(true)
    

    emailjs.sendForm('service_08ctk5i', 'template_sbnwfvh', form.current, '17cXuSlvrGbzTCUK_')
      .then((result) => { 
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <>

    <div className='contact-container' id="contact">   
        <h1 className={popup ? 'contact-headline dark': 'contact-headline'}>Contact</h1>
       
     <Info popup={popup}/>
  

    </div>

    </>
  )
}

export default Contact