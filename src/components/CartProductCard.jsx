import React, { useState } from 'react'

export const CartProductCard = ({product, removeFromCart}) => {
    const [quantity, setQuantity] = useState(product.quantity);
    let price = product.price * quantity;

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
      }
    
      const decrementQuantity = () => {
        if (quantity > 0) {
          setQuantity(quantity - 1)
        }
      }
  return (
    <div className='cart-card'>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <div>
            <button onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>+</button>
            <button onClick={() => removeFromCart(product)}>Remove</button>
        </div>
        <span>Price: {price}</span>
    </div>
  )
}
