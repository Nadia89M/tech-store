import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeCart } from '../actions/productActions';
import { Link } from "react-router-dom";

const SideCart = ({ product: { cartOpen, cart, cartSubTotal, cartSideCart }, closeCart }) => {
    const getItemsCount = (id) => {
        let cartSameProduct = cart.filter(function (product) {
            return product.id === id;
        });
        return cartSameProduct.length;
    }

    const onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index;
    }

    const sideCart = cart.filter(onlyUnique);

    return (
        <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul>
                {sideCart.map(item => {
                    return (
                        <li key={item.id} className="cart-item mb-4">
                            <img
                                width="35"
                                src={`/${item.image}`}
                                // src={item.image}
                                alt="cart item"
                            />
                            <div className="mt-3">
                                <h6 className="text-uppercase">{item.title}</h6>
                                <h6 className="text-title text-capitalize">
                                    amount : {getItemsCount(item.id)}
                                </h6>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <h4 className="text-capitalize text-main">
                cart total : ${cartSubTotal}
            </h4>
            <div className="text-center my-5">
                <Link to="/cart" className="main-link">
                    cart page
          </Link>
            </div>
        </CartWrapper>
    )
}

const CartWrapper = styled.div`
  position: fixed;
  padding: 10px;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  @media (min-width: 576px) {
    width: 20rem;
  }
`;

SideCart.propTypes = {
    product: PropTypes.object.isRequired,
    closeCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    product: state.product
});


export default connect(mapStateToProps, { closeCart })(SideCart);