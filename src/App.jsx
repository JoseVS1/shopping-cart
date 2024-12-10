import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

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
      <Navbar cartProducts={cartProducts.length}/>
      <Outlet context={{products, cartProducts, setCartProducts}}/>
    </>
  )
}

export default App
