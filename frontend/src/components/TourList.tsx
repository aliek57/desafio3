import { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import CardItem from './CardItem';

interface TourProps {
    id: number;
    title: string;
    description?: string;
    price: number;
    durationDays: number;
    // availableFrom?: Date;
    // availableTo?: Date;
}

const TourList: React.FC = () => {
    const [tours, setTours] = useState<TourProps[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<TourProps[]>('http://localhost:3333/tours/');
                setTours(response.data);
            } catch (error) {
                setError('Failed to fetch tours.');
            }
        };

        fetchData();
    }, []);
  return (
    <Container>
      {error && <p>{error}</p>}
      <Row>
        {tours.map(tour => (
          <CardItem
            key={tour.id}
            id={tour.id}
            title={tour.title}
            description={tour.description}
            price={tour.price}
            durationDays={tour.durationDays}
          />
        ))}
      </Row>
    </Container>
  )
}

export default TourList
