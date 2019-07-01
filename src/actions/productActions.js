import { items } from "../reducers/productData";

import {
    HANDLE_SIDEBAR,
    HANDLE_CART,
    CLOSE_CART,
    OPEN_CART,
    SET_PRODUCTS,
    SET_SINGLE_PRODUCT,
    ADD_TO_CART
} from './types';

// set products
export const setProducts = () => async dispatch => {
    try {
        // const res = await fetch('');
        // const data = await res.json();

        dispatch({
            type: SET_PRODUCTS,
            payload: items
        });
    } catch (err) {
        console.log(err);
    }
}

// handle sidebar
export const handleSidebar = () => {
    return {
        type: HANDLE_SIDEBAR
    };
};
// hanldle sart
export const handleCart = () => {
    return {
        type: HANDLE_CART
    };
};
//close cart
export const closeCart = () => {
    return {
        type: CLOSE_CART
    };
};
// open cart
export const openCart = () => {
    return {
        type: OPEN_CART
    };
};

//add to cart
export const addToCart = id => {
    return {
        type: ADD_TO_CART
    };
};

// set single product
export const setSingleProduct = id => {
    return {
        type: SET_SINGLE_PRODUCT
    };
};


addToCart = id => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
        tempItem = tempProducts.find(item => item.id === id);
        let total = tempItem.price;
        let cartItem = { ...tempItem, count: 1, total };
        tempCart = [...tempCart, cartItem];
    } else {
        tempItem.count++;
        tempItem.total = tempItem.price * tempItem.count;
        tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    this.setState(
        () => {
            return { cart: tempCart };
        },
        () => {
            this.addTotals();
            this.syncStorage();
            this.openCart();
        }
    );
};