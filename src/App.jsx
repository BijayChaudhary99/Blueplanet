import { useState } from 'react';
import { Outlet, Link,  useLocation } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import HeroSlider from './Components/Intro/HeroSlider';
import Topbar from './Components/Navbar/topbar';
import About from './Components/About/About';
import './App.css';
import Footer from './Components/Navbar/Footer';
import Home from './Components/Intro/Home';
import Testimonial from './Components/Intro/Testimonial';

function App() {
  const location = useLocation();
  return (
    <>
      <div>
        <Topbar/>
        <Navbar/>
        <Outlet/>
        {location.pathname === '/' && <HeroSlider />}
        {location.pathname === '/' && <Home/>}
        {location.pathname === '/' && <Testimonial/>}
        <Footer/>
      </div>
    </>
  )
}

export default App;
