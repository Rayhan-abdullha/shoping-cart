import React from "react";
import { data } from "../../Db/db";

const CartList = ({ quantity, deleteProduct }) => {
  const total = quantity * data.price;

  const handleCheck = () => {
    alert("Order Process successfully done!!")
  }
  return (
    <div className="cartList">
      <div className="d-flex gap-2 align-items-center justify-content-between">
        <div>
        <p>{data.productName}</p>
        <p>
        ${data.price}.00 * {quantity} <strong>${total}</strong>
      </p>
        </div>
        <button onClick={deleteProduct} className="deleteProduct">del</button>
      </div>
      
      <button onClick={handleCheck} className="cartBtn checkList">Buy</button>
    </div>
  );
};

export default CartList;
