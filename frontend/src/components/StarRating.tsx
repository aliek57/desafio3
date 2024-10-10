import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    return (
        <div className='star-rating d-flex'>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <label key={index} className='star-label'>
                        <input 
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                            className={`star ${ratingValue <= (hoveredRating || rating) ? 'active' : ''}`}
                            onMouseEnter={() => setHoveredRating(ratingValue)}
                            onMouseLeave={() => setHoveredRating(0)}

                        />
                    </label>
                );
            })}
        </div>
    );
}

export default StarRating;
