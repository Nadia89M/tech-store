import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearCart } from '../../actions/productActions';
import PayPalBtn from "./PayPalBtn";
const CartTotals = ({ product: { cartSubTotal }, clearCart }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-title text-center my-4">
                    <button
                        className="btn btn-outline-danger text-capitalize mb-4"
                        onClick={clearCart}
                    >
                        clear cart
        </button>
                    <h3>total : ${cartSubTotal}</h3>
                    {/* <PayPalBtn
                        cartTotal={cartSubTotal}
                        clearCart={clearCart}
                    /> */}
                </div>
            </div>
        </div>
    );
}

CartTotals.propTypes = {
    product: PropTypes.object.isRequired,
    clearCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    product: state.product
});


export default connect(mapStateToProps, { clearCart })(CartTotals);