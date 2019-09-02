import React from "react";
import { increment, decrement, removeItem } from '../../actions/productActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    FaTrash,
    FaChevronCircleUp,
    FaChevronCircleDown
} from "react-icons/fa";

const CartItem = ({
    product: { cart },
    cartItem,
    increment,
    decrement,
    removeItem
}) => {
    const { id, title, price, image } = cartItem;

    const getItemsCount = (id) => {
        let cartSameProduct = cart.filter(function (product) {
            return product.id === id;
        });
        return cartSameProduct.length;
    }

    return (
        <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
            {/* image */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <img src={image} width="60" className="img-fluid" alt="product" />
            </div>
            {/*end of image */}
            {/* title */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <span className="d-lg-none">product : </span>
                {title}
            </div>
            {/*end of title */}
            {/* price */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <span className="d-lg-none">price : $</span>
                {price}
            </div>
            {/*end of price */}
            {/* count controls */}
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <FaChevronCircleDown
                            onClick={() => decrement(cartItem)}
                            className="cart-icon text-primary"
                        />
                        <span className="text-title text-muted mx-3">{getItemsCount(id)}</span>
                        <FaChevronCircleUp
                            onClick={() => increment(cartItem)}
                            className="cart-icon text-primary"
                        />
                    </div>
                </div>
            </div>
            {/* end count controls */}
            {/* remove item */}
            <div className="col-10 mx-auto col-lg-2 ">
                <FaTrash
                    className="text-danger cart-icon"
                    onClick={() => removeItem(id)}
                />
            </div>
            {/*end of remove */}
            {/* item total */}
            <div className="col-10 mx-auto col-lg-2">
                <strong className="text-muted">item total : ${getItemsCount(id) * price}</strong>
            </div>
            {/* end item total */}
        </div>
    );
}

CartItem.propTypes = {
    product: PropTypes.object.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    product: state.product
});


export default connect(mapStateToProps, { increment, decrement, removeItem })(CartItem);