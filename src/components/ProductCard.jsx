import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';

export const ProductCard = ({product}) => {
  const [quantity, setQuantity] = useState(0);

  const {cartProducts, setCartProducts} = useOutletContext();

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  }

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }
  
  const addToCart = () => {
    if (quantity === 0 || cartProducts.includes(product)) return;

    const result = cartProducts.filter(x => x.id === product.id).length;

    const cartProduct = {
      ...product,
      quantity: quantity
    }

    if (!result) {
      setCartProducts(prev => {
        return [...prev, cartProduct]
      })
    }
    
  }

  return (
    <div className='card'>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
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
