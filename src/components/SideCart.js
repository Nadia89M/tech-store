import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleCart } from '../actions/productActions';

const SideCart = ({ product: { cartOpen }, handleCart }) => {
    return (
        <CartWrapper show={cartOpen} onClick={handleCart}>
            <p>cart items</p>
        </CartWrapper>
    )
}

const CartWrapper = styled.div`
  position: fixed;
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
    handleCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    product: state.product
});


export default connect(mapStateToProps, { handleCart })(SideCart);