import React, {useEffect, useState} from 'react'   
import { NavLink, useLocation } from 'react-router-dom';
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
            <NavLink exact activeClassName="active" to = "/"> HOME </NavLink>
            <NavLink exact activeClassName="active" to = "/projects"> CODE </NavLink>
            <NavLink exact activeClassName="active" to = "/photography"> PHOTO </NavLink>
            <NavLink exact activeClassName="active" to = "/about"> ABOUT </NavLink>
        </div>
    </div>
  )
}

export default Navbar;