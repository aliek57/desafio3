import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

type ReviewProps = {
    review: {
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
}

const Review: React.FC<ReviewProps> = ({ review }) => {
    const averageRating = (
        (review.servicesRating +
          review.locationsRating +
          review.amenitiesRating +
          review.pricesRating +
          review.roomRating) / 5
      ).toFixed(1);

      const formatedDate = new Date(review.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })

  return (
    <div className="review mt-3 mb-3">
        <Row>
            <Col md={3} className='d-flex justify-content-center'>
            <img src="https://via.placeholder.com/80" alt="User" className='img-fluid userIcon' />
            </Col>
            <Col>
            <p className="review-date">{formatedDate}</p>
            <h5 className="userName mt-2">{review.isAnonymous ? 'Anonymous' : 'User'}</h5>
            <div className="userStatus d-flex align-items-center">
                <div className="d-flex review-rating">
                    <FaStar className="card-icon me-1"/>
                    <p>{averageRating}</p>
                </div>
                <p className='user-review mx-2'>15 reviews</p>
            </div>
            <p className="comment mt-2">{review.comment}.</p>
            </Col>
        </Row>
    </div>
  )
}

export default Review
