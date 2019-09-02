import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Cart = ({ product: { cart } }) => {
    if (cart.length === 0) {
        return (
            <div className="container-fluid py-5">
                {/* row */}
                <div className="row">
                    <div className="col">
                        <h1 className="text-title text-center my-4">
                            Your cart is currently empty
                        </h1>

                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <section className="py-5">
                {/* title */}
                <div className="container">
                    <Title title="your cart items" center />
                </div>
                {/* cart columns */}
                <CartColumns />
                {/* cart list */}
                <CartList />
                {/* cart totals */}
                <CartTotals />
            </section>
        );
    }
}

Cart.propTypes = {
    product: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    product: state.product
});


export default connect(mapStateToProps)(Cart);