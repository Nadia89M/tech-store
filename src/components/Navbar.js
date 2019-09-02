import React from 'react';
import PropTypes from 'prop-types';
import { FaBars, FaCartPlus } from 'react-icons/fa';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import { connect } from 'react-redux';
import { handleSidebar, handleCart } from '../actions/productActions';

const Navbar = ({ product: { cartItems }, handleSidebar, handleCart }) => {
  return (
    <NavWrapper>
      <div className="nav-center">
        <FaBars className="nav-icon" onClick={handleSidebar} />
        <img src={logo} alt="tech store logo" />
        <div className="nav-cart">
          <FaCartPlus className="nav-icon" onClick={handleCart} />
          <div className="cart-items">{cartItems}</div>
        </div>
      </div>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  z-index: 999;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;

Navbar.propTypes = {
  product: PropTypes.object.isRequired,
  handleSidebar: PropTypes.func.isRequired,
  handleCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  product: state.product
});


export default connect(mapStateToProps, { handleSidebar, handleCart })(Navbar);
