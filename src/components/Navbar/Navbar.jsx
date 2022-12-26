import React from "react";
import Cart from "../Cart/Cart";

const Navbar = ({cart, deleteProduct}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Sneakers
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Collections
            </a>
            <a className="nav-link" href="#">
              Men
            </a>
            <a className="nav-link" href="#">
              Women
            </a>
            <a className="nav-link" href="#">
              About
            </a>
            <a className="nav-link" href="#">
              <Cart cart={cart} deleteProduct={deleteProduct}/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
