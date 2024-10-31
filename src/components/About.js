import React from 'react';
import AboutBg from '../assets/images/about-bg.jpg'


const About = () => {
  return (
    <div className="about" style={{ backgroundImage: `url(${AboutBg})` }}>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </div>
  );
};

export default About;
