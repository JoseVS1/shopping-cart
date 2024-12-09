import React from 'react'

export const ProductCard = ({product}) => {
  return (
    <div className='card'>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <span>${product.price}</span>
        <div>
            <button>-</button>
            <span>0</span>
            <button>+</button>
        </div>

        <button>Add</button>
    </div>
  )
}
