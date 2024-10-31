import React from 'react';
import homeBg from '../assets/images/home-bg.jpg'; // Import the image

const Home = () => {
  return (
    <div className="home"
      style={{ backgroundImage: `url(${homeBg})` }}>
      <div className='home'>
        <h1>Welcome to Our Website</h1>
        <p>This is the home page.</p>
      </div>
    </div>
  );
};

export default Home;
