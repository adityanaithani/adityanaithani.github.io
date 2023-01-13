import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Home.css';

function Home() {
  return (
    <div className = "home" >
      <div className = "about">
        <h2 className = "glow noselect"> aditya. </h2>
        <div className = "prompt noselect">
          <p> cs, bio, photo.</p>
          <a href = "https://www.linkedin.com/in/aditya-naithani/" className = "icons"> <LinkedInIcon /> </a>
          <a href = "https://github.com/adityanaithani" className = "icons"> <GitHubIcon /> </a>
          <a href = "mailto:aditya0602@gmail.com" className = "icons"> <EmailIcon /> </a>
        </div>
      </div>
    </div>
  )
}

export default Home