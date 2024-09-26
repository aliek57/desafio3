import { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import CardItem from './CardItem';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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

const TourList: React.FC = () => {
    const [tours, setTours] = useState<TourProps[]>([
      {
        id: 1,
        title: 'Tour 1 Tour 1 Tour 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum eget neque tincidunt mattis a at mauris. Sed sed lectus a purus convallis consequat.',
        price: 150,
        durationDays: 7,
        location: 'Cidade do Meio',
        rating: 4.5,
        reviews: 120
      },
      {
        id: 2,
        title: 'Tour 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum eget neque tincidunt mattis a at mauris. Sed sed lectus a purus convallis consequat.',
        price: 200,
        durationDays: 10,
        location: 'Cidade do Lado',
        rating: 4.8,
        reviews: 150
      },
      {
        id: 3,
        title: 'Tour 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum eget neque tincidunt mattis a at mauris. Sed sed lectus a purus convallis consequat.',
        price: 200,
        durationDays: 10,
        location: 'Cidade da Frente',
        rating: 4.8,
        reviews: 150
      },
      {
        id: 4,
        title: 'Tour 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum eget neque tincidunt mattis a at mauris. Sed sed lectus a purus convallis consequat.',
        price: 200,
        durationDays: 10,
        location: 'Cidade do Lado',
        rating: 4.8,
        reviews: 150
      },
      // {
      //   id: 5,
      //   title: 'Tour 5',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum eget neque tincidunt mattis a at mauris. Sed sed lectus a purus convallis consequat.',
      //   price: 200,
      //   durationDays: 10,
      //   location: 'Cidade do Lado',
      //   rating: 4.8,
      //   reviews: 150
      // },
      // {
      //   id: 6,
      //   title: 'Tour 6',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum eget neque tincidunt mattis a at mauris. Sed sed lectus a purus convallis consequat.',
      //   price: 200,
      //   durationDays: 10,
      //   location: 'Cidade do Lado',
      //   rating: 4.8,
      //   reviews: 150
      // },
      // {
      //   id: 7,
      //   title: 'Tour 7',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum eget neque tincidunt mattis a at mauris. Sed sed lectus a purus convallis consequat.',
      //   price: 200,
      //   durationDays: 10,
      //   location: 'Cidade do Lado',
      //   rating: 4.8,
      //   reviews: 150
      // },
      // {
      //   id: 8,
      //   title: 'Tour 8',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum eget neque tincidunt mattis a at mauris. Sed sed lectus a purus convallis consequat.',
      //   price: 200,
      //   durationDays: 10,
      //   location: 'Cidade do Lado',
      //   rating: 4.8,
      //   reviews: 150
      // },
    ]);

    // const [error, setError] = useState<string | null>(null);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get<TourProps[]>('http://localhost:3333/tours/');
    //             setTours(response.data);
    //         } catch (error) {
    //             setError('Failed to fetch tours.');
    //         }
    //     };

    //     fetchData();
    // }, []);
  return (
    <Swiper
      direction='horizontal'
      centeredSlides={false}
      // spaceBetween={0}
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
        {/* {error && <p>{error}</p>} */}
          {tours.map(tour => (
            <SwiperSlide key={tour.id}>
              <CardItem
                key={tour.id}
                id={tour.id}
                title={tour.title}
                // description={tour.description}
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

export default TourList
