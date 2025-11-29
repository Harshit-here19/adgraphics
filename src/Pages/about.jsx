import React, { useState, useEffect } from 'react';
import CustomerReviews from '../components/CustomerReviews/CustomerReviews';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ clients: 0, projects: 0, awards: 0 });

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);

    // Counter animation
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targetCounts = { clients: 500, projects: 1200, awards: 25 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      // Easing function for smooth animation
      const easeOutQuad = (t) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      setCounts({
        clients: Math.floor(easedProgress * targetCounts.clients),
        projects: Math.floor(easedProgress * targetCounts.projects),
        awards: Math.floor(easedProgress * targetCounts.awards),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <section className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute w-64 h-64 rounded-full bg-linear-to-r from-purple-400 via-pink-500 to-red-500 top-10 left-10 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-15 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-180'
          }`}
        ></div>
        <div 
          className={`absolute w-48 h-48 rounded-full bg-linear-to-r from-blue-400 to-teal-300 bottom-20 right-20 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-15 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-180'
          }`}
        ></div>
        <div 
          className={`absolute w-32 h-32 rounded-full bg-linear-to-r from-yellow-400 to-orange-500 top-1/3 right-1/4 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-15 scale-100' : 'opacity-0 scale-50'
          }`}
        ></div>
        <div 
          className={`absolute w-40 h-40 bg-linear-to-r from-green-400 to-emerald-500 transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'opacity-15 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-180'
          }`}
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', top: '20%', right: '5%' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div 
          className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-50 opacity-50"></div>
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12">
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h1 
                className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ease-out delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                About Our Company
              </h1>
              
              <h2 
                className={`text-xl text-indigo-600 font-semibold mb-6 transition-all duration-700 ease-out delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Innovating Solutions Since 2010
              </h2>
              
              <p 
                className={`text-gray-600 mb-6 leading-relaxed transition-all duration-700 ease-out delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                At AD Graphics, we specialize in delivering high-quality printing solutions that bring your ideas to life. From flex banners, business cards, pamphlets, posters, and standees to a wide variety of media options, we provide creative and professional printing services tailored to your needs.
              </p>
              
              <p 
                className={`text-gray-600 mb-8 leading-relaxed transition-all duration-700 ease-out delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Our goal is to help businesses, brands, and individuals make a lasting impression. Whether you need eye-catching promotional materials or elegant business stationery, we combine the latest technology with expert craftsmanship to ensure every print stands out.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div 
                  className={`text-center transition-all duration-700 ease-out delay-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="text-4xl font-bold text-indigo-600 mb-1">{counts.clients}</div>
                  <div className="text-gray-500 font-medium text-sm sm:text-base">Happy Clients</div>
                </div>
                <div 
                  className={`text-center transition-all duration-700 ease-out delay-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="text-4xl font-bold text-indigo-600 mb-1">{counts.projects}</div>
                  <div className="text-gray-500 font-medium text-sm sm:text-base">Projects</div>
                </div>
                <div 
                  className={`text-center transition-all duration-700 ease-out delay-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="text-4xl font-bold text-indigo-600 mb-1">{counts.awards}</div>
                  <div className="text-gray-500 font-medium text-sm sm:text-base">Awards</div>
                </div>
              </div>
              
              {/* Values */}
              <div>
                <h3 
                  className={`text-2xl font-bold text-gray-900 mb-6 transition-all duration-700 ease-out delay-800 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Our Core Values
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div 
                    className={`bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-out delay-900 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Innovation</h4>
                    <p className="text-gray-600 text-sm">We constantly explore new ideas and approaches to stay ahead.</p>
                  </div>
                  
                  <div 
                    className={`bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-out delay-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Collaboration</h4>
                    <p className="text-gray-600 text-sm">We believe great things happen when people work together.</p>
                  </div>
                  
                  <div 
                    className={`bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-out delay-1100 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Integrity</h4>
                    <p className="text-gray-600 text-sm">Honesty and transparency guide every decision we make.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Content */}
            <div className="flex items-center justify-center">
              <div 
                className={`relative w-full max-w-lg transition-all duration-1000 ease-out delay-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <div className="absolute -inset-4 bg-linear-to-r from-indigo-400 to-purple-500 rounded-2xl transform rotate-3 opacity-20 animate-pulse"></div>
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="bg-linear-to-r from-indigo-500 to-purple-600 flex items-center justify-center min-h-[300px]">
                    <div className="text-center p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-20 mb-4 animate-bounce">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Our Team at Work</h3>
                      <p className="text-indigo-100 mt-2">Creating innovative solutions for tomorrow's challenges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <CustomerReviews />     */}
    </>
  );
};

export default About;