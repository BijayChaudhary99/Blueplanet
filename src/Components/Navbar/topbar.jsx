import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './topbar.css';

const Topbar = () => {
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);

  // Function to handle scrolling
  const handleScroll = () => {
    // Calculate the scroll position
    const scrollPosition = window.scrollY;

    // Determine if the topbar should be visible
    const shouldTopbarBeVisible = scrollPosition < 100;

    // Update the state to control the visibility of the topbar
    setIsTopbarVisible(shouldTopbarBeVisible);
  };

  useEffect(() => {
    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Conditionally render the topbar based on the state */}
      {isTopbarVisible && (
        <div className='t-section'>
          <div className='t-wrapper'>
            <div className='t-right'>
              <button className='t-button'>
                <a href='https://www.instagram.com/'>
                  <FontAwesomeIcon icon={faEnvelope} /> 
                  info@blueplanet.com.np
                </a>
              </button>
              <div className='social-icons'>
                <a href='https://facebook.com'>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href='https://twitter.com'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href='https://instagram.com'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;

