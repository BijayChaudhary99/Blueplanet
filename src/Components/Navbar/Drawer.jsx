import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import './Drawer.css';

const Drawer = ({isOpen, toggleDrawer }) => {
  return (
    <>
    {isOpen && <Backdrop onClick={toggleDrawer}/>} 
    <SDrawer isOpen={isOpen}>
        <><ul style={{listStyleType: 'none'}}>
            <div className='d-name'>Blue&#160;Planet</div>
                  <div className="d-dropdown">
                        <button className="d-dropbtn"><Link to="/">Home</Link>
                        </button>
                    </div>
                   <div className="d-dropdown">
                        <button className="d-dropbtn">MIGRATE&#160;&#x21e9;
                        </button>
                        <div className="d-dropdown-content">
                             <Link to="/canada">Canada</Link>
                             <a href="#">French Legion</a>
                             <a href="#">Australia</a>
                             <a href="#">United Kingdom</a>
                             <a href="#">Schengen</a>
                        </div>
                    </div> 
                    <div className="d-dropdown">
                        <button className="d-dropbtn"><Link to="/france">FRENCH&#160;LEGION&#160;</Link>
                        </button>
                        {/*<div className="d-dropdown-content">
                             <a href="#">About</a>
                             <a href="#">Training</a>
                             <a href="#">Visa Process</a>
                        </div>*/}
                    </div> 
                    <div className="d-dropdown">
                        <button className="d-dropbtn">SERVICES&#160;&#x21e9;
                        </button>
                        <div className="d-dropdown-content">
                             <a href="#">Visa Extension</a>
                             <a href="#">Skiled Work Visa</a>
                             <a href="#">Working Holiday Visa</a>
                             <a href="#">Family and Partner Visa</a>
                             <a href="#">Student Visa</a>
                             <a href="#">Visitor Visa</a>
                             <a href="#">Medical Treatment Visa</a>
                        </div>
                    </div> 
                    <div className="d-dropdown">
                        <button className="d-dropbtn">TESTIMONIALS
                        </button>
                    </div> 
                    <div className="d-dropdown">
                        <button className="d-dropbtn"><Link to="/about">ABOUT</Link>
                        </button>
                    </div> 
                    {/*<button className='d-button'>
                            &#160;ENQUIRY&#160;FORM&#160;
                    </button>*/}
                    <button className='d-button'>
                        &#160;CONTACT&#160;US&#160;
                    </button>
             </ul>
        </>
    </SDrawer>
    </>
  )
};

export default Drawer;
const Backdrop = styled.div`
    height: 100%;
    width: 100%;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.4s ease;
    background-color: rgba(0, 0, 0,0.2);
`;

const SDrawer = styled.div`
    z-index: 150;
    position: absolute;
    top: 0;
    height:100vh;
    width: 60%;
    background-color: rgb(49, 49, 49);
    transition: 0.4s ease;
     transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
    `;
