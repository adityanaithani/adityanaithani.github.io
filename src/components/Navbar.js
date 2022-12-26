import React, {useEffect, useState} from 'react'   
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {
  const [expandedNavbar, setExpandedNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandedNavbar(false);
  }, [location])

  return (
    <div className = "Navbar" id={expandedNavbar ? "open" : "close"}> 
        <div className = "toggleButton">
          <button
              onClick={() => {
                setExpandedNavbar((prev) => !prev);
              }}
            >
            <ReorderIcon />
          </button>
        </div> 
        <div className = "links">
            <Link to = "/"> Home </Link>
            <Link to = "/projects"> Projects </Link>
            <Link to = "/photography"> Photography </Link>
        </div>
    </div>
  )
}

export default Navbar;