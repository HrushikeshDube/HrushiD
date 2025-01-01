import React from 'react'
import "../Components/Achievement.css"
const Achievement = () => {
    return (
        <div className='achievement-section'>
            <div className='achievement-container'>
                <h2>Achievements</h2>
                <div className='achcard'>
                    <img src="./Assests/t3.jpeg" alt="Profile" className="rankimg" />
                    <p>I participated in a national-level tech expo at Pravara College of Engineering, Loni, where my team presented the 'InfoHub Connect' application. We secured 3rd place out of 120 teams, demonstrating the innovation and impact of our project in a competitive environment.</p>
                </div>
                <p className='line'></p>
                <div className='achcard'>
                    
                    <p>I secured 1st position among 30 groups in a competition organized by the Department of Electronics and Computer Engineering at Sanjivani College of Engineering, where I proposed an innovative IoT-based Ultrasonic Radar System project, enhancing object detection and monitoring capabilities through ultrasonic sensors and real-time data processing.</p>
                    <img src="./Assests/t1.jpeg" alt="Profile" className="rankimg" />
                </div>
            </div>
        </div>
    )
}

export default Achievement