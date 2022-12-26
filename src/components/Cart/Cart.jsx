import React, { useState } from 'react'
import CartList from './CartList'

function Cart({cart, deleteProduct}) {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(prev => !prev)
    }

  return (
    <React.Fragment>
        {
            show ? (<div>
                <strong onClick={handleClick}>Cart({cart})</strong>
            {
                cart !== 0 ? <CartList deleteProduct={deleteProduct} quantity={cart}/> : <p className='cartList d-flex align-items-center justify-content-center'>Empty Cart!!</p>
            }
            </div>) : (
                <strong onClick={handleClick}>Cart({cart})</strong>
            )
        }
    </React.Fragment>
  )
}

export default Cart