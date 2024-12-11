import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";

export const CartProductCard = ({product, removeFromCart}) => {
    const [quantity, setQuantity] = useState(product.quantity);
    let price = (product.price * quantity).toFixed(2);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
      }
    
      const decrementQuantity = () => {
        if (quantity > 0) {
          setQuantity(quantity - 1)
        }
      }
  return (
    <>
      <div className='cart-card'>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <div>
            <div>
              <button onClick={decrementQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={incrementQuantity}>+</button>
            </div>
            
            <span id='delete-button' onClick={() => removeFromCart(product)}><MdDelete /></span>
        </div>
        <span>${price}</span>
      </div>
    </>
  )
}
