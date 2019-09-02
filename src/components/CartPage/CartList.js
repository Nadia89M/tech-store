import React from "react";
import CartItem from "./CartItem";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CartList = ({ product: { cart } }) => {

    const onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index;
    }

    const cartColumn = cart.filter(onlyUnique);

    return (
        <div className="container-fluid">
            {/* row */}
            <div className="row">
                <div className="col">
                    {cartColumn.map(item =>
                        <CartItem
                            key={item.id}
                            cartItem={item}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

CartList.propTypes = {
    product: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    product: state.product
});


export default connect(mapStateToProps)(CartList);