import React, {useState, useEffect} from 'react'
import "../Immigrate/Country.css"
import "../Intro/Home.css"

const Home = () => {
  const images = [
    {
      src: 'src/assets/images/Canada1.jpg',
      alt: 'Canada Image',
      title: 'Canada'
    },
    {
      src: 'src/assets/images/Australia.jpg',
      alt: 'Australia Image',
      title: 'Australia'
    },
    
    {
      src: 'src/assets/images/uk.jpg',
      alt: 'Migrate Image',
      title: 'United Kingdom'
    },
    {
      src: 'src/assets/images/unitedstates.jpg',
      alt: 'Study Image',
      title: 'United States'
    },
    
    // ... add more images here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="country-container">
      <div className="country-main">
      <div className="country-details">
        <h1>Top Destination</h1>
        <br/>
    
      <div className="custom-slider-container">
        
      <button className="custom-slider-button prev-button" onClick={prevSlide}>
        &#8249;
      </button>
      {[...Array(window.innerWidth > 768 ? 4 : 1)].map((_, index) => {
          const imageIndex = (currentIndex + index) % images.length;
          const image = images[imageIndex];

        return (
          <div key={index} className="custom-slider-details">
            <img src={image.src} alt={image.alt} className="custom-slider-image" />
            <div className="custom-slider-content">
              <h3>{image.title}</h3>
            </div>
          </div>
        );
      })}
      <button className="custom-slider-button next-button" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
    <br/>
    <br/>
      </div>
     </div> 

    <div className="country-main">
      <div className="country-details">
        <center><h3>ABOUT</h3></center>
        <h1>OUR COMPANY</h1>
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
        <center><h3>We Offer</h3></center>
        <h1>We are here to help you</h1>
        <p>
          Welcome to our world-class company! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce nec consectetur nulla. Sed in turpis et enim mollis porttitor.
        </p> 
        <br/>
        <br/>
      <div className="country-content">
        <div className="country-details">
            <img  src="src\assets\images\study1.jpg" alt="Centered Image" className="country-centered-image"  />
           <div className="country-content">
            </div>
            <center><h1>STUDY</h1></center>
        </div>
        <div className="country-details">
            <img  src="src\assets\images\Work1.jpg" alt="Centered Image" className="country-centered-image"  />
           <div className="country-content">
            </div>
            <center><h1>WORK</h1></center>
        </div>
        <div className="country-details">
            <img  src="src\assets\images\migrate1.jpg" alt="Centered Image" className="country-centered-image"  />
           <div className="country-content">
            </div>
            <center><h1>MIGRATE</h1></center>
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
     <div className="country-main">
      <div className="country-details">
        <h1>Testmonials</h1>
        <p>
          Welcome to our world-class company! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce nec consectetur nulla. Sed in turpis et enim mollis porttitor.
        </p>
      </div>
     </div>  


    </div>
  )
}

export default Home


  

