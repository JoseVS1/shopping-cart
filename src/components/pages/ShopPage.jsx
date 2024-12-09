import React, { useEffect, useState } from 'react'
import { ProductCard } from '../ProductCard';

export const ShopPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getAllProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();

            setProducts(data);
        }

        getAllProducts()
    }, [])
  return (
    <>
        {products.map(p => {
            return <ProductCard key={p.id} product={p} />
        })}
    </>
  )
}
