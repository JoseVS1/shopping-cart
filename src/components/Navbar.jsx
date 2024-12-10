import React from 'react'
import { Link } from 'react-router-dom'

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
                <li>
                    <Link to="cart">Cart { cartProducts > 0 && `(${cartProducts})`}</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}
