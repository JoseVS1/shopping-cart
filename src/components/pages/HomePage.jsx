import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className='home-container'>
        <h1>NovaNest</h1>

        <p>Discover the Next Generation of Home & Lifestyle Products</p>

        <Link to="shop">Shop Now</Link>
    </div>
  )
}
