import { useEffect, useState } from 'react'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import CatItem from './CatItem';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Tour {
  price: number;
}
interface CategoryProps {
    id: number;
    name: string;
    tours: Tour[];
}

const CatList: React.FC = () => {
    const [categories, setCateogires] = useState<CategoryProps[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchCateogires = async () => {
            try {
                const response = await axios.get<CategoryProps[]>('http://localhost:3333/categories/');
                setCateogires(response.data);
            } catch (error) {
                setError('Failed to fetch categories.');
            }
        };

        fetchCateogires();
    }, []);
  return (
    <Swiper
      direction='horizontal'
      centeredSlides={false}
      loop={true}
      slidesPerView={4}
      autoplay={{ 
        delay: 800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination= {{ 
        clickable: true }}
      modules={[Autoplay, Pagination]}
      className='carrossel2'
      onSwiper={(swiper) => {
        swiper.el.addEventListener('mouseenter', () => swiper.autoplay.stop());
        swiper.el.addEventListener('mouseleave', () => swiper.autoplay.start());
      }}
    >
      <Container>
        {error && <p>{error}</p>}
        {categories.map(category => (
            <SwiperSlide key={category.id}>
              <CatItem
                key={category.id}
                id={category.id}
                name={category.name}
                tours={category.tours}
              />
            </SwiperSlide>
          ))}
      </Container>
    </Swiper>
  )
}

export default CatList;