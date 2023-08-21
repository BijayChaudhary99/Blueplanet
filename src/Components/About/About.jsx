import React from 'react';
import '../About/About.css';
import { Form } from "react-router-dom";

const About = () => {
  return (
      <div className="contact-container">
      <div className="image-center-container">
      <img
        src="src\assets\images\about1.jpg"
        alt="Centered Image"
        className="centered-image"
      />
      <div className="centered-content">
        <h1>ABOUT US</h1>
      </div>
    </div>
     <div className="About-main">
      <div className="About-details">
        <h1>About Us</h1>
        <p>
          Welcome to our world-class company! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce nec consectetur nulla. Sed in turpis et enim mollis porttitor.
        </p>
        <p>
          Our mission is to provide innovative solutions that make a positive impact on the world.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id velit id orci lacinia finibus sed sit amet eros.
        </p>   
      </div>
     </div>
      
      
      
      <div className="contact-main">
        <div className="company-details">
          <h2>Get in Touch</h2>
          <p> You are welcome to call us or send us an email with your immigration questions and inquiries.</p>
          <br/>
          <p>we are pleased to speak with you to discuss your qualifications and options under the various immigration programs and answer any questions or concerns you may have.</p>
          <br/>
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
          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, ea id minus quo qui nemo architecto tenetur mollitia tempore ipsum? Minus cum adipisci illo sint deleniti necessitatibus quasi unde ex.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, similique temporibus! Adipisci aliquam officiis ad, doloribus molestias ullam iste accusamus labore consectetur enim ex id assumenda deleniti nostrum suscipit odit.
          </p>
        </div>
        <div className="company-about">
          
        </div>
      </div>
    </div>
  );
};

export default About;

