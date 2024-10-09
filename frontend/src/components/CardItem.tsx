import { Col } from 'react-bootstrap';
import { CiClock2, CiStar } from 'react-icons/ci';

type Destination = {
  name: string;
  city: string;
  country: string;
}

type Review = {
  id: number;
  servicesRating: number;
  locationsRating: number;
  amenitiesRating: number;
  pricesRating: number;
  roomRating: number;
  comment?: string;
  isAnonymous?: boolean;
  tour: {
    id: number;
    title: string;
  }
}

type Tour = {
  id: number,
  destination: Destination;
  title: string;
  description?: string;
  price: number;
  durationDays: number;
  reviews: Review[];
}

const CardItem: React.FC<Tour> = ({ title, price, durationDays, destination, reviews = [] }) => {
  const rating = reviews.length > 0
  ? (reviews.reduce((acc, review) => {
    const reviewAverage = (
      review.servicesRating +
      review.locationsRating +
      review.amenitiesRating +
      review.pricesRating +
      review.roomRating
    ) / 5
    return acc + reviewAverage
  }, 0) / reviews.length).toFixed(1)
  : '0';

  return (
      <Col md={4} className="tour-card">
        <img src="https://via.placeholder.com/200" alt={title} className="card-image"/>
        <div className="card-content">
          <p className="card-location">
          {destination?.city}, {destination?.country}
          </p>
          <h4 className="card-title">{title}</h4>
          <div className="card-info">
            <div className="card-rating">
              <CiStar className="card-icon"/>
              <p>{rating}</p>
            </div>
            <div className="card-reviews">
              <p>{reviews.length} reviews</p>
            </div>
            <div className='card-duration'>
              <CiClock2 className="card-icon"/>
              <p>{durationDays} days</p>
            </div>
          </div>
          <div className="card-price">
            <p>Starting From</p>
            <h5>${price}</h5>
          </div>
        </div>
      </Col>
  )
}

export default CardItem;
