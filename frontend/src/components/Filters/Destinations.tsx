import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import axios from 'axios';

interface Destination {
    id: number;
    name: string;
    country?: string;
    city?: string;
    continent?: string;
}

interface Tour {
    id: number;
    destination: Destination;
}

const Destinations: React.FC = () => {
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const response = await axios.get<Tour[]>('http://localhost:3333/tours/');
                console.log("fetched tours: ", response.data)
                const destinationData = response.data.map(tour => ({
                    id: tour.id,
                    name: tour.destination.name,
                    country: tour.destination.country,
                    city: tour.destination.city,
                    continent: tour.destination.continent,
                }));

                setDestinations(destinationData);
            } catch (error) {
                setError('Failed to fetch.');
            }
        };

        fetchDestinations();
    }, []);

    const continents = ['Africa', 'Americas', 'Asia', 'Europe'];
    const group = continents.reduce((acc: { [key: string]: string[] }, continent) => {
        const countries = destinations
            .filter(destination => destination.continent === continent && destination.country)
            .map(destination => destination.country!);

        acc[continent] = Array.from(new Set(countries));
        return acc;
    }, {});

  return (
    <div className='mb-3 filter'>
        <h4 className='filterTitle'>Destinations</h4>
        {error && <p className="text-danger">{error}</p>}
        <Form>
            {continents.map((continent) => (
                <div key={continent}>
                    <h5 className="subtitle">{continent}</h5>
                    {group[continent].length > 0 ? (
                        group[continent].map((country, index) => (
                            <Form.Check
                                key={index}
                                type='checkbox'
                                label={country}
                            />
                        ))
                    ) : 
                        (
                           <p>No countries found</p>
                        )}
                </div>
            ))}
        </Form>
    </div>
  )
}

export default Destinations;
