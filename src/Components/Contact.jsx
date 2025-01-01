import React from 'react';
import "../Components/Contact.css";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='con-section'>
      <h2>Contact</h2>
      <p>Have a plan? Let’s build together!</p>
      <div className='social-con'>
        <a href="https://www.linkedin.com/in/hrushidube/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/share/1ApxN77KMj/" target="_blank" rel="noopener noreferrer">
          <FaFacebook  />
        </a>
        <a href="https://www.instagram.com/hrushidube_45?igsh=MTdmZjB6ZmIwYW43bA==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Contact;
