import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import ProductDtls from './components/ProductDtls/ProductDtls'

const App = () => {
  const [cart, setCart] = useState(0)
  const handleCart = (quant) => {
    setCart(prev => prev + quant);
  }
  const deleteProduct = () => {
    setCart(0)
  }
  return (
    <div>
        <Navbar cart={cart} deleteProduct={deleteProduct}/>
        <ProductDtls handleCart={handleCart}/>
    </div>
  )
}

export default App