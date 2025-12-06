import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full text-center space-y-10 animate-fadeIn">

        {/* Logo/Icon — Enhanced */}
        <div className="w-20 h-20 mx-auto mb-4 bg-linear-to-r from-gray-900 to-gray-700 rounded-3xl flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
          <span className="text-white text-2xl font-extrabold tracking-wide">AD</span>
        </div>

        {/* Heading — Larger, bolder, elegant */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
          AD Graphics
        </h1>

        {/* Description — More breathing room, refined text */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
          Premium printing solutions since 2010. Business cards, banners, pamphlets & more — crafted with precision, passion, and pixel-perfect attention to detail.
        </p>

        {/* Stats — With Icons & Cleaner Layout */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 text-center">
          {[
            { value: "500+", label: "Happy Clients", icon: "👥" },
            { value: "1200+", label: "Projects Delivered", icon: "📦" },
            { value: "14+", label: "Years of Excellence", icon: "🏆" }
          ].map((stat, i) => (
            <div key={i} className="group flex flex-col items-center space-y-2 transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-extrabold text-gray-800 group-hover:text-gray-900 transition-colors">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm md:text-base font-medium flex items-center gap-1">
                <span aria-hidden="true">{stat.icon}</span> {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA — Prominent, elegant button */}
        <div className="pt-6">
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gray-900 text-white text-sm md:text-base font-semibold rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Get in Touch →
          </Link>
        </div>

      </div>
    </div>
  );
};

// Optional: Add fade-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.8s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default About;