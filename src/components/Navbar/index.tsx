import React from 'react';
import "./styles.scss";

const Navbar = () => {
  return (
    <nav className="sticky top-0 shadow-md z-50 navbar">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800 font-mono">.ps</div>
        <div className="flex items-center space-x-6">
          <a href="#about-me" className="nav-link">About Me</a>
          <a href="#" className="nav-link">Contact</a>
          <button className="cta-button">Get in Touch</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;