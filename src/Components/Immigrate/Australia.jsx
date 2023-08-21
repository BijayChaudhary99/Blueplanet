import React from 'react'
import "../Immigrate/Country.css"

const Australia = () => {
  return (
    <div className="country-container">
      <div className="country-image-center-container">
      <img
        src="src\assets\images\Australia.jpg"
        alt="Centered Image"
        className="country-centered-image"
      />
      <div className="country-centered-content">
        <h1>AUSTRALIA</h1>
      </div>
    </div>





    <div className="country-main">
      <div className="country-details">
        <h1>WELCOME TO AUSTRALIA</h1>
        <p>
          Welcome to our world-class company! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce nec consectetur nulla. Sed in turpis et enim mollis porttitor.
        </p>
        <p>
          Our mission is to provide innovative solutions that make a positive impact on the world.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id velit id orci lacinia finibus sed sit amet eros.
        </p>   
        <h1><button className="country-content-button">Contact Us</button></h1>
      </div>
     </div>  

     <div className="country-main">
      <div className="country-details">
        <h1>WHY AUSTRALIA ?</h1>
        <p>
          Welcome to our world-class company! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce nec consectetur nulla. Sed in turpis et enim mollis porttitor.
        </p> 
        <br/>
        <br/>
      <div className="country-content">
        <div className="country-details">
            <img  src="src\assets\images\study1.jpg" alt="Centered Image" className="country-centered-image"  />
           <div className="country-content-p">
             <h2>STUDY</h2>
            </div>
        </div>
        <div className="country-details">
            <img  src="src\assets\images\Work1.jpg" alt="Centered Image" className="country-centered-image"  />
           <div className="country-content-p">
             <h2>WORK</h2>
            </div>
        </div>
        <div className="country-details">
            <img  src="src\assets\images\migrate1.jpg" alt="Centered Image" className="country-centered-image"  />
           <div className="country-content-p">
             <h2>MIGRATE</h2>
            </div>
        </div>
        </div>
       
      </div>
     </div> 
     <div className="country-main">
      <div className="country-details">
        <h1>OUR SERVICES</h1>
        <p>
          Welcome to our world-class company! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce nec consectetur nulla. Sed in turpis et enim mollis porttitor.
        </p>
      </div>
     </div>  
     <div className="country-main">
      <div className="country-details">
        <h1>WHY BLUE PLANET ?</h1>
        <p>
          Welcome to our world-class company! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce nec consectetur nulla. Sed in turpis et enim mollis porttitor.
        </p>
      </div>
     </div>  
    </div>
  )
}

export default Australia
