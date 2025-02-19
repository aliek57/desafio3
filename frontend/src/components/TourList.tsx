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
  rating?: number;
  reviews: Review[];
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

    const popularTours = tours
      .filter(tour => tour.reviews.length > 0)
      .sort((a, b) => {
        const aRating = a.reviews.reduce((acc, review) => acc + ((review.servicesRating + review.locationsRating + review.amenitiesRating + review.pricesRating + review.roomRating)/5), 0) / a.reviews.length;
        const bRating = b.reviews.reduce((acc, review) => acc + ((review.servicesRating + review.locationsRating + review.amenitiesRating + review.pricesRating + review.roomRating)/5), 0) / b.reviews.length;
        return bRating - aRating;
      })
      .slice(0, 5);

  return (
    <Swiper
      direction='horizontal'
      centeredSlides={false}
      loop={true}
      slidesPerView={4}
      autoplay={{ 
        delay: 800,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      pagination= {{ 
        clickable: true }}
      modules={[Autoplay, Pagination]}
      className='carrossel'
      onSwiper={(swiper) => {
        swiper.el.addEventListener('mouseenter', () => swiper.autoplay.stop());
        swiper.el.addEventListener('mouseleave', () => swiper.autoplay.start());
      }}
    >
      <Container className='list'>
        {error && <p>{error}</p>}
          {popularTours.map(tour => (
            <SwiperSlide key={tour.id}>
              <CardItem
                id={tour.id}
                title={tour.title}
                price={tour.price}
                destination={tour.destination}
                durationDays={tour.durationDays}
                reviews={tour.reviews}
              />
            </SwiperSlide>
          ))}
      </Container>
    </Swiper>
  )
}

export default TourList;