import React, { useState, useEffect } from 'react';
import './Navbar.css'
import {FaBars} from "react-icons/fa" 
import { Link } from 'react-router-dom';
import Drawer from './Drawer'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

   useEffect(() => {
    // Function to handle scrolling
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollPosition = window.scrollY;

      // Determine if the navbar should be fixed
      const shouldNavbarBeFixed = scrollPosition > 1; // Adjust this value based on the height of your topbar

      // Update the state to control the fixed position of the navbar
      setIsNavbarFixed(shouldNavbarBeFixed);
    };

    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, 
    []);

  return (
    <>
    <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer}/>
    <div className={`n-wrap ${isNavbarFixed ? 'fixed' : ''}`}>
    <div className="n-wrapper" toggleDrawer={toggleDrawer}>
        <div className='drawerbutton' onClick={toggleDrawer}>
            <FaBars/>
        </div>
        <div className='n-left' >
            <div className='n-name'><Link to="/">Blue&#160;Planet</Link></div>
        </div>
        <div className='n-center'>
            <div  className='n-list'>
              <ul style={{listStyleType: 'none'}}>
                  <div className="dropdown">
                        <button className="dropbtn"><Link to="/">HOME</Link>
                        </button>
                    </div>
                   <div className="dropdown">
                        <button className="dropbtn">IMMIGRATE&#160;&#x21e9;
                        </button>
                        <div className="dropdown-content">
                             <Link to="/canada">Canada</Link>
                             <Link to="/australia">Australia</Link>
                             <Link to="/unitedstates">United States</Link>
                             <Link to="/unitedkingdom">United Kingdom</Link>
                             <Link to="/schengen">Schengen</Link>
                        </div>
                    </div> 
                    <div className="dropdown">
                        <button className="dropbtn"><Link to="/france">FRENCH&#160;LEGION&#160;</Link>
                        </button>
                        {/*<div className="d-dropdown-content">
                             <a href="#">About</a>
                             <a href="#">Training</a>
                             <a href="#">Visa Process</a>
                        </div>*/}
                    </div> 
                    <div className="dropdown">
                        <button className="dropbtn">SERVICES&#160;&#x21e9;
                        </button>
                        <div className="dropdown-content">
                             <a href="#">Visa Extension</a>
                             <a href="#">Skiled Work Visa</a>
                             <a href="#">Working Holiday Visa</a>
                             <a href="#">Family and Partner Visa</a>
                             <a href="#">Student Visa</a>
                             <a href="#">Visitor Visa</a>
                             <a href="#">Medical Treatment Visa</a>
                        </div>
                    </div> 
                    <div className="dropdown">
                        <button className="dropbtn">TESTIMONIALS
                        </button>
                    </div> 
                    <div className="dropdown">
                        <button className="dropbtn"><Link to="/about">ABOUT</Link>
                        </button>
                    </div> 
             </ul>
            </div>
        </div>
        <div className='n-right'> 
           <button className='button'>
                <Link to="/contact">&#160;CONTACT&#160;US&#160;</Link>
           </button>
        </div>
    </div>
    </div>
    </>
  )
}
