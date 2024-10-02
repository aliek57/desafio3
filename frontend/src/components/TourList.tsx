import { useEffect, useState } from 'react'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import CardItem from './CardItem';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type Destination = {
  name: string;
  city: string;
  country: string;
}

type Tour = {
  id: number,
  destination: Destination;
  title: string;
  description?: string;
  price: number;
  durationDays: number;
  location?: string;
  rating?: number;
  reviews?: number;
}

const TourList: React.FC = () => {
    const [tours, setTours] = useState<Tour[]>([]);

    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Tour[]>('http://localhost:3333/tours/');
                setTours(response.data);
            } catch (error) {
                setError('Failed to fetch tours.');
            }
        };

        fetchData();
    }, []);
  return (
    <Swiper
      direction='horizontal'
      centeredSlides={false}
      loop={true}
      slidesPerView={4}
      autoplay={{ 
        delay: 800,
        disableOnInteraction: false
      }}
      pagination= {{ 
        clickable: true }}
      modules={[Autoplay, Pagination]}
      className='carrossel'
    >
      <Container>
        {error && <p>{error}</p>}
          {tours.map(tour => (
            <SwiperSlide key={tour.id}>
              <CardItem
                key={tour.id}
                id={tour.id}
                title={tour.title}
                price={tour.price}
                durationDays={tour.durationDays}
                location={tour.location}
                rating={tour.rating}
                reviews={tour.reviews}
              />
            </SwiperSlide>
          ))}
      </Container>
    </Swiper>
  )
}

export default TourList;