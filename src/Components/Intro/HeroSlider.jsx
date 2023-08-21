import React, { useState, useEffect } from 'react';
import './HeroSlider.css';
import image1 from '../../assets/images/Canada2.jpg';
import image2 from '../../assets/images/Australia2.jpg';
import image3 from '../../assets/images/france1.jpeg';

const images = [image1, image2, image3];

const slideContents = [ 
  {
    text: 'IMMIGRATION TO CANADA',
    buttonLabel: 'CONTACT US',
    buttonLink: '/contact', // Add the URL you want to link to
  },
  {
    text: 'STUDY IN AUSTRALIA',
    buttonLabel: 'Learn More',
    buttonLink: '/australia', // Add the URL you want to link to
  },
  {
    text: 'LETS JOIN FRENCHLEGION',
    buttonLabel: 'Join Now',
    buttonLink: '/france', // Add the URL you want to link to
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up the automatic sliding interval
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => {
      // Clean up the interval
      clearInterval(interval);
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPreviousSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    goToSlide(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    goToSlide(newIndex);
  };

  return (
    <div className="hero-slider">
      <div className="slider-container">
        <button className="slider-button prev" onClick={goToPreviousSlide}>
          &#8249;
        </button>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="slide-content">
              <h1>{slideContents[index].text}</h1>
              <a href={slideContents[index].buttonLink}>
                <button className="content-button">{slideContents[index].buttonLabel}</button>
              </a>
            </div>
          </div>
        ))}
        <button className="slider-button next" onClick={goToNextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;