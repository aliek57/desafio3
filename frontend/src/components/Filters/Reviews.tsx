import React from 'react'
import { Form } from 'react-bootstrap';

interface ReviewProps {
  onReview: (rating: number) => void;
}

const reviews = [
  { label: "5 Stars", rating: 5 }, 
  { label: "4 Stars & Up", rating: 4 }, 
  { label: "3 Stars & Up", rating: 3 },
  { label: "2 Stars & Up", rating: 2 },
  { label: "1 Stars & Up", rating: 1 }
]

const Reviews: React.FC<ReviewProps> = ({ onReview }) => {
  return (
    <div className='mb-3 filter'>
        <h4 className='filterTitle'>Reviews</h4>
        <Form>
            {reviews.map((review, index) => (
                <Form.Check
                    key={index}
                    type='checkbox'
                    label={review.label}
                    onChange={() => onReview(review.rating)}
                />
            ))}
        </Form>
    </div>
  )
}

export default Reviews;