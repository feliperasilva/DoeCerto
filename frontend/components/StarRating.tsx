import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import React from "react";

interface StarRatingProps {
  rating?: number;
  size?: number;
  color?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating = 0, size = 14, color = "#FFD700" }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const iconStyle = { fontSize: size, color };

  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} style={iconStyle} />
      ))}
      {hasHalfStar && <FaStarHalfAlt style={iconStyle} />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} style={iconStyle} />
      ))}
    </div>
  );
};

export default StarRating;