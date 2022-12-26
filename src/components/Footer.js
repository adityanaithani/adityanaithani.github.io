import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className = "footer">
        <div className = "socials">
            <InstagramIcon />
            <GitHubIcon />
            <LinkedInIcon />
        </div>
        <p>
            &copy; 2022 anaithani.github.io
        </p>
    </div>
  )
}

export default Footer