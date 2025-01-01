import React from 'react';
import "../Components/Skills.css";

const Skills = () => {
  // Inline JSON data
  const skills = [
    {
      "name": "React Native",
      "image": "./Assests/react.png"
    },
    {
      "name": "ReactJS",
      "image": "./Assests/react.png"
    },
    {
      "name": "Java",
      "image": "./Assests/jav.png"
    },
    {
      "name": "C",
      "image": "./Assests/c-.png"
    },
    {
      "name": "Javascript",
      "image": "./Assests/java-script.png"
    },
    {
      "name": "Python",
      "image": "./Assests/python.png"
    },
    {
      "name": "HTML",
      "image": "./Assests/html.png"
    },
    {
      "name": "CSS",
      "image": "./Assests/images.png"
    },
    {
      "name": "Redux",
      "image": "./Assests/redux.png"
    },
    {
      "name": "Firebase",
      "image": "./Assests/firebase.png"
    },
    {
      "name": "MySQL",
      "image": "./Assests/mysql.png"
    },
    {
      "name": "MongoDB",
      "image": "./Assests/mongodb.png"
    },
    {
      "name": "Git",
      "image": "./Assests/social.png"
    },
    {
      "name": "GitHub",
      "image": "./Assests/github.png"
    },
    {
      "name": "Figma",
      "image": "./Assests/figma.png"
    }
    // Add more skills as needed
  ];

  return (
    <div className='skill-section'>
      <h2>MY SKILLS</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
