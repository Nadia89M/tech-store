import { linkData } from "./linkData";
import { socialData } from "./socialData";

import {
    HANDLE_SIDEBAR,
    HANDLE_CART,
    CLOSE_CART,
    OPEN_CART,
    SET_PRODUCTS,
    SET_SINGLE_PRODUCT,
    ADD_TO_CART
} from '../actions/types';

const initialState = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData,
    socialIcons: socialData,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    carTotal: 0,
    storeProducts: [],
    singleProduct: {},
    loading: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_SIDEBAR:
            return {
                ...state,
                sidebarOpen: !state.sidebarOpen
            };
        case HANDLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
            };
        case CLOSE_CART:
            return {
                ...state,
                cartOpen: false
            };
        case OPEN_CART:
            return {
                ...state,
                openOpen: true
            };
        case SET_PRODUCTS:
            return {
                ...state,
                storeProducts: action.payload.map(item => {
                    const { id } = item.sys;
                    const image = item.fields.image.fields.file.url;
                    const product = { id, ...item.fields, image };
                    return product;
                })
            };
        case SET_SINGLE_PRODUCT:
            return state;
        case ADD_TO_CART:
            return {
                ...state,
                cart: action.payload
            };
        default:
            return state;
    }
};
