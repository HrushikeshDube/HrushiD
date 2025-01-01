import React from 'react'
import "../Components/Experience.css"
const Experience = () => {
    return (
        <div className='exp-section'>
            <h2>Experience</h2>
            <div className='exp-container'>
                <div className='exp-box'>
                    <img src="./Assests/teamchar.jpeg" alt="img" />
                    <p className='durtext'>2022-2024</p>
                    <div className='comp'>
                        <h3>Web Development Lead</h3>
                        <p>Team Charlie (ECE)</p>
                        <p>Led Team Charlie's Web Development Club, mentoring students and organizing workshops to enhance web skills</p>
                    </div>
                </div>
                <div className='exp-box'>
                    <img src="./Assests/ecesa.jpeg" alt="img" />
                    <p className='durtext'>2023-2024</p>
                    <div className='comp'>
                        <h3>TNP Co-ordinator</h3>
                        <p>Electronics and Computer Engineering</p>
                        <p>Coordinated TNP activities for ECE, guiding peers and organizing placement-focused initiatives.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Experience

