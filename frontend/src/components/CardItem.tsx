import { Card, Col } from 'react-bootstrap';

interface TourProps {
  id: number;
  title: string;
  description?: string;
  price: number;
  durationDays: number;
  // availableFrom?: Date;
  // availableTo?: Date;
}
const CardItem: React.FC<TourProps> = ({ title, description, price, durationDays }) => {
  return (
      <Col md={3} className="mb-4">
        <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/90x60" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>${price}</Card.Text>
          <Card.Text>Duration: {durationDays} days</Card.Text>
        </Card.Body>
      </Card>
      </Col>
  )
}

export default CardItem;
