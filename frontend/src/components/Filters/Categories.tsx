import { useEffect, useState } from 'react'
import axios from 'axios';
import { Form } from 'react-bootstrap';
interface CategoryProps {
  id: number;
  name: string;
}

const Categories: React.FC = () => {
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
    <div className='mb-3 filter'>
        <h4 className='filterTitle'>Categories</h4>
        <Form>
          {error && <p>{error}</p>}
          {categories.map(category => (
              <Form.Check
                  key={category.id}
                  id={category.id}
                  type='checkbox'
                  label={category.name}
              />
          ))}
        </Form>
    </div>
  )
}

export default Categories;
