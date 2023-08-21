import React, {useState, useEffect} from 'react'
import '../Intro/Testimonial.css';

const Testimonial = () => {
  const images = [
    {
      src: 'src/assets/images/persona (1).jpg',
      alt: 'Canada Image',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing lorem. Cum sociis natoque penatibus et lorem. Lorem ',
      author: 'John Doe',
    },
    {
      src: 'src/assets/images/persona (2).jpg',
      alt: 'Australia Image',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem. Cum sociis natoque penatibus et lorem',
      author: 'Tom Holand',
    },
    
    {
      src: 'src/assets/images/persona (3).jpg',
      alt: 'Migrate Image',
      text: 'Lorem ipsum dolor sit amet, consect lorem. Cum sociis natoque penatibus et lorem  ullamcorper lorem',
      author: 'Jane Smith',
    },
    {
      src: 'src/assets/images/persona (4).jpg',
      alt: 'Study Image',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. lorem ',
      author: 'Micheal Jordan',
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
     <div className="testimonial-container">
      <div className="country-main">
      <div className="country-details">
        <h1>CLIENT TESTIMONIALS</h1>
        <br/>
      <div className="testimonial-slider-container">
        
      <button className="testimonial-slider-button prev-button" onClick={prevSlide}>
        &#8249;
      </button>
      {[...Array(window.innerWidth > 768 ? 1 : 1)].map((_, index) => {
          const imageIndex = (currentIndex + index) % images.length;
          const image = images[imageIndex];

        return (
          <div key={index} className="testimonial-slider-details">
            <img src={image.src} alt={image.alt} className="testimonial-slider-image" />
            <div className="custom-slider-content">
                <br/>
                <br/>
              <p>{image.text}</p>
              <br/>
              <h3>- {image.author}</h3>
            </div>
          </div>
        );
      })}
      <button className="testimonial-slider-button next-button" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
    <br/>
    <br/>
    </div>
    </div> 
    </div>
  )
}

export default Testimonial
