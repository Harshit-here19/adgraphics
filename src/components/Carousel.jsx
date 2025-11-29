// Carousel.jsx
import React from "react";

export const Carousel = ({ location, label, animationTime }) => {
  const carouselList = [];
  for (let i = 1; i <= 24; i++) {
    carouselList.push(
      <div
        key={i}
        className="relative group overflow-hidden rounded-2xl w-80 h-64 shrink-0 shadow-lg hover:shadow-2xl transition-all duration-500"
      >
        <img
          src={`/images/${location}/img${i < 13 ? i : i - 12}.jpg`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt={`Portfolio item ${i}`}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
          <div className="text-white transform translate-y-5 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="font-bold text-lg">
              {label} {i}
            </h3>
            <p className="text-sm opacity-80">Design & Development</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center py-12">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-500 to-purple-600">
            {label}
          </h2>
          <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative group">
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden py-4">
            <div
              className="flex gap-6 w-max animate-scrollLeft hover:[animation-play-state:paused]"
              style={{ "--baseSpeed": `${animationTime}s` }}
            >
              {[...carouselList, ...carouselList]}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 h-full w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>

        
      </div>
    </section>
  );
};
