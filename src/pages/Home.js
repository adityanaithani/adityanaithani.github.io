import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Home.css';

function Home() {
  return (
    <div className = "home" >
      <div className = "about noselect">
        <h2> aditya. </h2>
        <div className = "prompt">
          <p> cs, bio, photo.</p>
          <LinkedInIcon />
          <GitHubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className = "skills">
        <h1> Skills </h1>
        <ul className = "skillList">
          <li className = "item" >
            <h2>Frontend</h2>
            <span> 
              React, Java, test, test, test
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home