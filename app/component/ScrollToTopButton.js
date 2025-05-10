"use client";

import React, { useEffect, useState } from 'react';

// Icon component for Call
const CallIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5A1 1 0 013 3.5h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
  </svg>
);

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentScroll - currentScroll / 8);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Button action for Call
  const handleCall = () => {
    window.location.href = 'tel:+918961598876';
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-3 z-50">
      <button
        onClick={handleCall}
        className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200"
        aria-label="Call"
        type="button"
      >
        <CallIcon />
      </button>
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 flex items-center justify-center bg-white text-black rounded-full shadow-lg transition-opacity duration-300 text-xl ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
        type="button"
      >
        ↑
      </button>
    </div>
  );
};

export default ScrollToTopButton;
