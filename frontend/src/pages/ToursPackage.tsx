import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

type Destination = {
    name: string;
    city: string;
    country: string;
}

type Tour = {
    id: number,
    destination: Destination;
}

const ToursPackage = () => {
    const location = useLocation()
    const [tours, setTours] = useState<Tour[]>([])
    const [filteredTours, setFilteredTours] = useState<Tour[]>([])

    const getSearchTerm = () => {
        const params = new URLSearchParams(location.search);
        return params.get('search') || '';
    }

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await axios.get<Tour[]>('http://localhost:3333/tours/')
                setTours(response.data)
                setFilteredTours(response.data)
            } catch (error) {
                console.error('Error fetching tours:', error)
            }
        }
        fetchTours()
    }, [])

    useEffect(() => {
        const searchTerm = getSearchTerm()
        console.log('search term:', searchTerm)
        const filteredTours = tours.filter(tour => 
            tour.destination.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        console.log('filtered tour: ', filteredTours)
            setFilteredTours(filteredTours)
    }, [location.search, tours])
  return (
    <div>
      <h2>Result</h2>
      {filteredTours.length > 0 ? (
        filteredTours.map(tour => (
          <div key={tour.id}>
            <h3>{tour.destination.name}</h3>
            <p>{tour.destination.city}, {tour.destination.country}</p>
          </div>
        ))
      ) : (
        <p>No tours found matching the search criteria.</p>
      )}
    </div>
  )
}

export default ToursPackage
