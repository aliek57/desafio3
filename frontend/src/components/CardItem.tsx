import { Col } from 'react-bootstrap';
import { CiClock2, CiStar } from 'react-icons/ci';

interface TourProps {
  id: number;
  title: string;
  description?: string;
  price: number;
  durationDays: number;
  location?: string;
  rating?: number;
  reviews?: number;
  // availableFrom?: Date;
  // availableTo?: Date;
}
const CardItem: React.FC<TourProps> = ({ title, description, price, durationDays, location, rating, reviews }) => {
  return (
      <Col className="tour-card">
        <img src="https://via.placeholder.com/200" alt={title} className="card-image"/>
        <div className="card-content">
          <p className="card-location">{location}</p>
          <h4 className="card-title">{title}</h4>
          <div className="card-info">
            <div className="card-rating">
              <CiStar className="card-icon"/>
              <p>{rating}</p>
            </div>
            <div className="card-reviews">
              <p>{reviews} reviews</p>
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
