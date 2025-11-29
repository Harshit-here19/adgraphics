// components/CustomerReviews/ReviewList.jsx
import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewList = ({ reviews, isVisible }) => {
  return (
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <ReviewCard 
          key={review.id} 
          review={review} 
          isVisible={isVisible}
          index={index}
        />
      ))}

      {/* Load More Button */}
      <div className="text-center pt-6">
        <button className="px-8 py-3 bg-white border-2 border-indigo-600 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:shadow-lg">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default ReviewList;