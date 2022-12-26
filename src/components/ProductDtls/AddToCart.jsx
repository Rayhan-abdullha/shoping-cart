import React from "react";
import { useState } from "react";

const AddToCart = ({handleCart}) => {
    const [quantity, setQuantity] = useState(0)
    const handleInc = () => {
        setQuantity(prev => prev + 1)
    }
    const handleDec = () => {
        if (quantity > 0){
            setQuantity(prev => prev - 1)
        }
    }

    const handleAddCart = () => {
        handleCart(quantity)
        setQuantity(0)
    }
  return (
    <div className="addCart d-flex">
      <div className="quantityBtn d-flex align-items-center gap-3">
        <button onClick={handleDec}>-</button>
        <h4 className="quantity">{quantity}</h4>
        <button onClick={handleInc}>+</button>
      </div>
      <button onClick={handleAddCart} className="cartBtn">Add to Cart</button>
    </div>
  );
};

export default AddToCart;
