import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Review from './Review';

interface ReviewProps {
    id: number;
    servicesRating: number;
    locationsRating: number;
    amenitiesRating: number;
    pricesRating: number;
    roomRating: number;
    comment?: string;
    createdAt: string;
    isAnonymous?: boolean;
    tour: {
      id: number;
      title: string;
    }
  }

const ReviewList:React.FC<{ tourId: number }> = ({ tourId }) => {
    const [reviews, setReviews] = useState<ReviewProps[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get<ReviewProps[]>(`http://localhost:3333/reviews/tour/${tourId}`);
                setReviews(response.data);
            } catch (error) {
                setError('Failed to fetch reviews.');
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [tourId]);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
  return (
    <div className="reviewsList">
        {reviews.length === 0 ? (
            <p>No reviews found.</p>
        ) : (
            reviews.map(review => <Review key={review.id} review={review}/>)
        )}
    </div>
  )
}

export default ReviewList
