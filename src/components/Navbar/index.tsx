"use client"

import React, { useState } from 'react';
import "./styles.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((v) => !v);
  }

  function close() {
    setOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text font-mono" aria-label="Home">.ps</a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/design-patterns" className="nav-link font-medium">Design Patterns</a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={toggle}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a href="#about-me" className="nav-link font-medium" onClick={close}>About Me</a>
            <a href="#contact-me" className="nav-link font-medium" onClick={close}>Get in Touch</a>
            <a href="/design-patterns" className="nav-link font-medium" onClick={close}>Design Patterns</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;