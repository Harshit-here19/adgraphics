import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <div className="max-w-xl text-center">
        
        {/* Logo/Icon */}
        <div className="w-14 h-14 mx-auto mb-6 bg-gray-900 rounded-2xl flex items-center justify-center">
          <span className="text-white text-xl font-bold">AD</span>
        </div>
        
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-3">
          AD Graphics
        </h1>
        
        {/* Description */}
        <p className="text-gray-500 mb-8 leading-relaxed">
          Premium printing solutions since 2010. Business cards, banners, pamphlets & more — crafted with precision.
        </p>
        
        {/* Stats */}
        <div className="flex justify-center gap-8 mb-8 text-sm">
          <div>
            <div className="text-xl font-semibold text-gray-900">500+</div>
            <div className="text-gray-400">Clients</div>
          </div>
          <div className="w-px bg-gray-200"></div>
          <div>
            <div className="text-xl font-semibold text-gray-900">1200+</div>
            <div className="text-gray-400">Projects</div>
          </div>
          <div className="w-px bg-gray-200"></div>
          <div>
            <div className="text-xl font-semibold text-gray-900">14+</div>
            <div className="text-gray-400">Years</div>
          </div>
        </div>
        
        {/* CTA */}
        <Link to='/contact' className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors">
          Get in Touch
        </Link>
        
      </div>
    </div>
  );
};

export default About;