import { Col } from 'react-bootstrap';

interface CatProps {
  id: number;
  name: string;
}

const CatItem: React.FC<CatProps> = ({ name }) => {
  return (
      <Col className="cat-card">
        <div className="cat-content">
        <img src="https://via.placeholder.com/70" alt={name} className="cat-image"/>
          <h5 className="cat-title">{name}</h5>
          <p className="cat-counter">10 Tours+</p>
          <div className="cat-price">
            <p>From</p>
            <h5>$250</h5>
          </div>
        </div>
      </Col>
  )
}

export default CatItem;