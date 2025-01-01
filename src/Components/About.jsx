import React from 'react';
import '../Components/About.css'; // Assuming you will create a separate CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFile, faMobile, faMoon, faPhone, faTeletype, faTh } from "@fortawesome/free-solid-svg-icons";
import { FaPhone, FaTelegram } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './Assests/res.pdf';
    link.download = 'Hrushikesh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="text-container">
          <h2>Hi, I’m Hrushikesh</h2>
          <p>
            I am passionate engineer and software development enthusiast. When I’m not building innovative tech solutions, you’ll find me on the cricket field or savoring great food. Let’s create something amazing together!"          </p>
          <div className='exbtn'>
            <button className='resume' onClick={handleDownload}>
              <FontAwesomeIcon icon={faFile} size="lg" />
              <li>Resume</li>
            </button>
            <button className="resume" onClick={() => window.open('https://github.com/hrushikeshdube', '_blank')}>
              <FaGithub style={{ fontSize: '20px' }} />
              <li>Github</li>
            </button>
          </div>
        </div>
        <div className="image-container">
          <img src="./Assests/profile.jpeg" alt="Profile" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
