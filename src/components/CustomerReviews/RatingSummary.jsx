// components/CustomerReviews/RatingSummary.jsx
import React from 'react';
import StarRating from './StarRating';

const RatingSummary = ({ averageRating, ratingDistribution, totalReviews, isVisible }) => {
  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-700 ease-out delay-100 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-4">Rating Overview</h3>
      
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Average Rating - Centered on mobile, left on desktop */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-4">
            <span className="text-5xl font-bold text-gray-900">{averageRating}</span>
            <div>
              <StarRating rating={Math.round(parseFloat(averageRating))} size="lg" />
              <p className="text-gray-500 mt-1 text-center md:text-left">{totalReviews} reviews</p>
            </div>
          </div>
        </div>

        {/* Rating Distribution - Takes remaining space */}
        <div className="flex-1 w-full">
          <div className="space-y-3">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-8 shrink-0">{rating} ★</span>
                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-yellow-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${percentage}%` : '0%' }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 w-8 text-right shrink-0">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingSummary;