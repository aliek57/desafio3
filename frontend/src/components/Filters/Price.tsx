import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';

type PriceProps = {
  maxTourPrice: number;
  minTourPrice: number;
  onPrice: (minPrice: number, maxPrice: number) => void;
}

const Price: React.FC<PriceProps> = ({ maxTourPrice, minTourPrice, onPrice }) => {
    const [maxPrice, setMaxPrice] = useState(maxTourPrice);

    useEffect(() => {
      setMaxPrice(maxTourPrice);
    }, [maxTourPrice])

    const handlePriceChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setMaxPrice(parseInt(e.target.value));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onPrice(minTourPrice, maxPrice);
    };
  return (
    <Form className='mb-3 filter'>
      <h4 className='filterTitle'>Filter By</h4>
      <input 
        type="range"
        className='custom-range form-range'
        min={minTourPrice}
        max={maxTourPrice}
        value={maxPrice}
        onChange={handlePriceChange}
        />
      <div className="prices">
        <span>${minTourPrice.toFixed(2)}</span>
        <strong>${maxPrice.toFixed(2)}</strong>
      </div>
      <button 
        className="btn btn-primary"
        onClick={handleSubmit}
        >Submit</button>
    </Form>
  )
}

export default Price
