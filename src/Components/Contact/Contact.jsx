import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarker, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../Contact/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="image-center-container">
      <img
        src="src\assets\images\Contact1.jpg"
        alt="Centered Image"
        className="centered-image"
      />
      <div className="centered-content">
        <h1>CONTACT US</h1>
        <p>Let's Talk!</p>
        <p>Get in touch using the Contact form or contact details below.</p>
      </div>
    </div>
      <div className="contact-main">
        <div className="company-details">
          <h2>Get in Touch</h2>
          <div>
          <p> You are welcome to call us or send us an email with your immigration questions and inquiries.</p>
          <br/>
          <p>we are pleased to speak with you to discuss your qualifications and options under the various immigration programs and answer any questions or concerns you may have.</p>
          <br/>
          <br/>
        </div>
          <div className="icon-text-group">
            <div className="icon">
              <FaEnvelope /> : info@blueplanet.com
            </div>
          </div>
          <br/>
          <div className="icon-text-group">
            <div className="icon">
              <FaPhone /> : 01-47475511
            </div>
          </div>
          <br/>
          <div className="icon-text-group">
            <div className="icon">
              <FaMapMarker />: Kathmandu, Nepal
            </div>
            <br/>
            <br/>
          </div>
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
        <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required placeholder="Enter the subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="Enter your message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      </div>
     <div className="company-about-map">
        <div className="company-about">
          <br/>
          <h2>BLUE PLANET</h2>
          <br />
          <p>KATHMANDU OFFICE ( MAHARAJGUNJ ) </p>
          <br/>
          <p> Location 🏬: Bangalmukhi, Maharajgunj, Kathmandu, Nepal</p>
          <br/>
          <p>Phone ☎️: 01-0000000 /00 /00</p>
          <br/>
          <p>Mail 📧: info@blueplanet.com</p>
          <br/>
        </div>
        <div className="company-map">
          {/* Embed your map here */}
          {/* For example, you can use an iframe to embed a Google Map */}
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27208.378062705016!2d85.30603527252648!3d27.71724518025292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d10c6699a1%3A0x759c92e7009a4bd0!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1628505684875!5m2!1sen!2snp"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
