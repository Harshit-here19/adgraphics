// components/CustomerReviews/BackgroundElements.jsx
import React from 'react';

const BackgroundElements = ({ isVisible }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className={`absolute w-72 h-72 rounded-full bg-linear-to-r from-yellow-200 to-orange-200 -top-20 -right-20 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-50'
        }`}
      ></div>
      <div 
        className={`absolute w-96 h-96 rounded-full bg-linear-to-r from-blue-100 to-indigo-100 -bottom-32 -left-32 transition-all duration-1000 ease-out delay-200 ${
          isVisible ? 'opacity-40 scale-100' : 'opacity-0 scale-50'
        }`}
      ></div>
      <div 
        className={`absolute w-48 h-48 rounded-full bg-linear-to-r from-pink-100 to-purple-100 top-1/3 left-1/4 transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-50'
        }`}
      ></div>
    </div>
  );
};

export default BackgroundElements;