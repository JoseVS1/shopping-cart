import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';

export const ProductCard = ({product}) => {
  const [quantity, setQuantity] = useState(0);

  const {setCartProducts} = useOutletContext();

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  }

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }
  
  const addToCart = () => {
    if (quantity === 0) return;

    setCartProducts(prev => {
      const cartProduct = {
        ...product,
        quantity: quantity
      }

      return [...prev, cartProduct]
    })
  }

  return (
    <div className='card'>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <span>${product.price}</span>
        <div>
            <button onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>+</button>
        </div>

        <button onClick={addToCart}>Add</button>
    </div>
  )
}
