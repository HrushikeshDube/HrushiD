import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon from React Icons
import "../Components/Project.css";

const Project = () => {
  // Inline JSON data
  const projects = [
    {
      "image": "./Assests/info.png",
      "title": "InfoHub Connect",
      "desc": "InfoHub Connect is a React Native app for college and library management, featuring real-time notifications, book reservations, event updates, and more.",
      "github": "https://github.com/HrushikeshDube/Infohub-Android-App-User"
  },
  {
      "image": "./Assests/foodcourt.jpeg",
      "title": "Food Court",
      "desc": "The Food Court App is a React Native-based platform that enables seamless, contactless ordering and payment at food courts.",
      "github": "https://github.com/HrushikeshDube/Food_App"
  },
  {
      "image": "./Assests/port.png",
      "title": "DevIdentity",
      "desc": "DevIdentity is a personal portfolio website that showcases my skills, projects, and accomplishments as a developer. ",
      "github": "https://github.com/HrushikeshDube/HrushiD"
  },
  {
      "image": "./Assests/carbook.png",
      "title": "Rent Cars",
      "desc": "The Car Booking Website is a user-friendly platform that allows customers to easily browse and reserve cars for rental. ",
      "github": "https://github.com/HrushikeshDube/Car-Booking-Website"
  }
  ];

  return (
    <div className='project-section'>
      <h2>PROJECTS</h2>
      <div className='project-container'>
        {projects.map((project, index) => (
          <div key={index} className='project-card' id={`project-${index}`}>
            <img src={project.image} alt={project.title} className='project-image' />
            <h3 className='project-title'>{project.title}</h3>
            <p className='project-desc'>{project.desc}</p>
            <a href={project.github} target='_blank' rel='noopener noreferrer' className='project-link'>
              <FaGithub /> GITHUB
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
