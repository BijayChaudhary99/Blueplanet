import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarker, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../Navbar/Footer.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
         <div className="Footer-details">
          <h2>About Us</h2>
          <p>We are at our best in providing optimistic services to our clients in all the facets of their immigration
             by emphasizing the importance of Visa examination and clearance.</p>
             <br/>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             quidem. Ea cum eius corrupti dolor incidunt itaque quod aspernatur dolore voluptatibus amet!</p>
             <br/>
        </div>
        <div className="Footer-details">
            <h2>Quick Links</h2>
          <div className="quick-links-list">
            <Link to="/">&rarr; Home</Link>
            <Link to="/about">&rarr; Immigrate</Link>
            <Link to="/">&rarr; French Legion</Link>
            <Link to="/about">&rarr; Services</Link>
            <Link to="/">&rarr; Testimonials</Link>
            <Link to="/about">&rarr; About</Link>
            {/* Add other links as needed */}
          </div>
          <br />
          <br/> 
          <h2>Follow Us</h2>
          <br/>
          <div className="social-icona">
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
            &nbsp;&nbsp;
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
            &nbsp;&nbsp;
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="Footer-details">
          <h2>Lets Talk</h2>
          <div>
          <p>We are pleased to speak with you to discuss your qualifications and options under the various immigration programs and answer any questions or concerns you may have.</p>
          <br/>
          <br/>
        </div>
          <div className="icon-text-group">
            <div className="iconon">
              Contact
            </div>
            <br/>   
            <div className="iconon">
              <FaEnvelope /> : info@blueplanet.com
            </div>
          </div>
          <br/>
          <div className="icon-text-group">
            <div className="iconon">
              <FaPhone /> : 01-47475511
            </div>
          </div>
          <br/>
          <div className="icon-text-group">
            <div className="iconon">
              <FaMapMarker />: Kathmandu, Nepal
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; {new Date().getFullYear()} Blue Planet Immigration. All Rights Reserved. Developed by Bijay Kumar Chaudhary </p>
      </div>
    </footer>
  );
};

export default Footer;

