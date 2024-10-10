import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
interface Tour {
  price: number;
}

interface CatProps {
  id: number;
  name: string;
  tours: { tour: Tour}[];
}

const CatItem: React.FC<CatProps> = ({ id, name, tours }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tours?category=${id}`);
  }

  const minCategoryPrice = () => {
    const validPrice = tours
      .map(tour => {
        return tour.tour.price;
      })
      .filter(price => typeof price === 'number' && !isNaN(price))

    if(validPrice.length === 0) return 0;

    return Math.min(...validPrice);
  }

  return (
      <Col className="cat-card" onClick={handleClick}>
        <div className="cat-content">
        <img src="https://via.placeholder.com/70" alt={name} className="cat-image"/>
          <h5 className="cat-title">{name}</h5>
          <p className="cat-counter">{tours.length} Tours</p>
          <div className="cat-price">
            <p>From</p>
            <h5>${minCategoryPrice()}</h5>
          </div>
        </div>
      </Col>
  )
}

export default CatItem;