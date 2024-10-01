import { useState } from 'react'
import { Form } from 'react-bootstrap';

const Price: React.FC = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
  return (
    <Form className='mb-3 filter'>
      <h4 className='filterTitle'>Filter By</h4>
      <input type="range" className='custom-range form-range' />
      <div className="prices">
        <span>$0.00</span>
        <strong>$150.00</strong>
      </div>
      <button className="btn btn-primary">Submit</button>
    </Form>
  )
}

export default Price
