// components/CustomerReviews/StarRating.jsx
import React from 'react';

const StarRating = ({ 
  rating, 
  interactive = false, 
  size = 'md', 
  onRatingChange, 
  hoveredRating, 
  setHoveredRating 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const handleClick = (star) => {
    if (interactive && onRatingChange) {
      onRatingChange(star);
    }
  };

  const handleMouseEnter = (star) => {
    if (interactive && setHoveredRating) {
      setHoveredRating(star);
    }
  };

  const handleMouseLeave = () => {
    if (interactive && setHoveredRating) {
      setHoveredRating(0);
    }
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          className={`${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-transform duration-200`}
        >
          <svg
            className={`${sizeClasses[size]} ${
              star <= (interactive ? (hoveredRating || rating) : rating)
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300 fill-gray-300'
            } transition-colors duration-200`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </button>
      ))}
    </div>
  );
};

export default StarRating;