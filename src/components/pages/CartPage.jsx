import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { CartProductCard } from '../CartProductCard';

export const CartPage = () => {
  const {cartProducts, setCartProducts} = useOutletContext();
  const [hasOrdered, setHasOrdered] = useState(false);

  const removeFromCart = (product) => {
    setCartProducts(cartProducts.filter(x => x.id !== product.id));
  }

  const submitOrder = () => {
    setHasOrdered(true);
    setCartProducts([]);
  }

  return (
  <div className='cart-body'>
    {hasOrdered ? (
      <h1 className='submitted-heading'>Order submitted!</h1>
    ) : (
      <>
        {cartProducts.map(x => {
          return <CartProductCard key={x.id} product={x} removeFromCart={removeFromCart}/>
        })}

        {cartProducts.length > 0 ? (
          <button className='submit-button' onClick={submitOrder}>Submit Order</button>
        ) : (
          <h1 className='empty-heading'>Cart empty</h1>
        )}
      </>
    )}
  </div>
  )
}