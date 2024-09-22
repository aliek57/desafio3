import { useEffect, useState } from 'react'
import axios from 'axios';

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
    <div>
      <h1>Teste Tours</h1>
      {error && <p>{error}</p>}
      <div>
        {tours.map(tour => (
          <div key={tour.id}>
            <h2>{tour.title}</h2>
            <p>{tour.description}</p>
            <p>Price: ${tour.price}</p>
            <p>Duration: {tour.durationDays} days</p>
            {/* <p>Available from: {tour.availableFrom?.toISOString()}</p>
            <p>Available to: {tour.availableTo?.toISOString()}</p> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TourList
