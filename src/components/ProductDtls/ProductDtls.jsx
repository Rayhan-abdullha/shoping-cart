import React from "react";
import { data } from "../../Db/db";
import Img from "../../images/image-product-3.jpg";
import AddToCart from "./AddToCart";

const ProductDtls = ({handleCart}) => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-xl-6 col-md-6">
          <div className="productImg">
            <img src={Img} alt="notfound" />
          </div>
        </div>
        <div className="col-xl-6 col-md-6">
          <div className="productInfo">
            <p className="companyTitle">{data.companyName}</p>
            <h1>{data.productName}</h1>
            <p className="mt-4">{data.descrip}</p>
            <div className="price d-flex gap-3">
              <h3>${data.price}</h3>
              <h4>{data.discount}%</h4>
            </div>
            <p className="oldPrice">${data.oldPrice}.00</p>
            <AddToCart handleCart={handleCart}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDtls;
