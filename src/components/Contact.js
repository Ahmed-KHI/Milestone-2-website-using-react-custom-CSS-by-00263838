import React from 'react';
import ContactBg from '../assets/images/contact-bg.jpg'


const Contact = () => {
  return (
    <div className="contact" style={{ backgroundImage: `url(${ContactBg})` }}>
      <h1>Contact Us</h1>
      <p>This is the contact page.</p>
    </div>
  );
};

export default Contact;
