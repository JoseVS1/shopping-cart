import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = ({cartProducts}) => {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="shop">Shop</Link>
                </li>
                <li className='cart-link'>
                    <Link to="cart"><FaShoppingCart /> <span className='cart-count'>{ cartProducts > 0 && cartProducts}</span></Link>
                </li>
            </ul>
        </nav>
    </>
  )
}
