import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { setSingleProduct, addToCart } from '../actions/productActions';

const Product = ({ product, setSingleProduct, addToCart }) => {
  return (
    <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6  col-lg-4 my-3">
      <div className="card">
        <div className="img-container">
          <img
            src={product.image}
            className="card-img-top p-5"
            alt="product"
            style={{ height: "320px" }}
          />
          <div className="product-icons">
            <Link
              to={`/products/${product.id}`}
              onClick={() => setSingleProduct(product.id)}
            >
              <FaSearch className="icon" />
            </Link>
            <FaCartPlus
              className="icon"
              onClick={() => addToCart(product)}
            />
          </div>
        </div>
        <div className="card-body d-flex justify-content-between">
          <p className="mb-0">{product.title}</p>
          <p className="mb-0 text-main">${product.price}</p>
        </div>
      </div>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  .card {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
  }
  .card:hover {
    box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .card-img-top {
    transition: var(--mainTransition);
  }
  .card:hover .card-img-top {
    transform: scale(1.15);
    opacity: 0.2;
  }
  .img-container {
    position: relative;
  }
  .product-icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  .icon {
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
  }
  .card:hover .product-icons {
    opacity: 1;
  }
  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

Product.propTypes = {
  product: PropTypes.object.isRequired,
  setSingleProduct: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default connect(null, { setSingleProduct, addToCart })(Product);
