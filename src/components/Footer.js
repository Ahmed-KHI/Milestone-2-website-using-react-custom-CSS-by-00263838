import React from 'react';
import './Footer.css'; // Import the CSS for the footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} (00263838). All rights reserved</p>
                <div className="footer-links">
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact</a>
                    <a href="/">Home</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
