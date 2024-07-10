import image from '../../../Assets/Img/Footer_logo.png'
import React from 'react';
import './HeroSection.css'; 
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="logo" style={{fontSize:"69px"}}>Rate My Show</h1>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="hero-button" ><Link to={"/home"} style={{textDecoration:"none", color:"white"}}>Get Started</Link></button>
        </div>
        <div className="hero-image">
          <img src={image} alt="Hero" />
        </div>
        <div className="hero-sidebar">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
