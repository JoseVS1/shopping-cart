import React from 'react'
import { ProductCard } from '../ProductCard';
import { useOutletContext } from 'react-router-dom';

export const ShopPage = () => {
    const {products} = useOutletContext();
    
  return (
    <div className='cards-container'>
        {products.map(p => {
            return <ProductCard key={p.id} product={p} />
        })}
    </div>
  )
}
