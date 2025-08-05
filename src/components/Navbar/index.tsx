import React from 'react';
import "./styles.scss";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text font-mono">.ps</div>
        <div className="flex items-center space-x-8">
          <a href="#about-me" className="nav-link font-medium">About Me</a>
          <a href="#contact-me" className="nav-link font-medium">Get in Touch</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;