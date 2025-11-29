// components/CustomerReviews/index.jsx
import React, { useState } from 'react';
import reviewData from '../../data/reviews.json';
import RatingSummary from './RatingSummary';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import BackgroundElements from './BackgroundElements';

const CustomerReviews = () => {
  // eslint-disable-next-line no-unused-vars
  const [isVisible, setIsVisible] = useState(true);
  const [reviews, setReviews] = useState(reviewData);
  const [showSuccess, setShowSuccess] = useState(false);

  // Calculate average rating
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : 0;

  // Rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: reviews.length > 0 
      ? (reviews.filter(r => r.rating === rating).length / reviews.length) * 100 
      : 0
  }));

  const handleNewReview = (newReview) => {
    setReviews(prev => [newReview, ...prev]);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      <BackgroundElements isVisible={isVisible} />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our clients say about their experience working with us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form and Summary */}
          <div className="lg:col-span-1 space-y-8">
            <ReviewForm onNewReview={handleNewReview} showSuccess={showSuccess} />
            <RatingSummary 
              averageRating={averageRating} 
              ratingDistribution={ratingDistribution} 
              totalReviews={reviews.length}
              isVisible={isVisible}
            />
          </div>

          {/* Right Column - Reviews List */}
          <div className="lg:col-span-2">
            <ReviewList reviews={reviews} isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;