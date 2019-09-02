import { linkData } from "./linkData";
import { socialData } from "./socialData";

import {
    HANDLE_SIDEBAR,
    HANDLE_CART,
    CLOSE_CART,
    OPEN_CART,
    SET_PRODUCTS,
    SET_SINGLE_PRODUCT,
    ADD_TO_CART,
    INCREMENT,
    DECREMENT,
    REMOVE_ITEM,
    CLEAR_CART
} from '../actions/types';

const initialState = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData,
    socialIcons: socialData,
    cart: [],
    cartSubTotal: 0,
    // cartTax: 0,
    // carTotal: 0,
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
            return {
                ...state,
                singleProduct: state.storeProducts.find(item => {
                    return item.id === action.payload
                })
            };
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
                cartItems: state.cartItems + 1,
                cartSubTotal: state.cartSubTotal + action.payload.price
            };
        case INCREMENT:
            return {
                ...state,
                cart: [...state.cart, action.payload],
                cartItems: state.cartItems + 1,
                cartSubTotal: state.cartSubTotal + action.payload.price
            };
        case DECREMENT:
            return {
                ...state,
                removeFromCart: state.cart.splice((state.cart.findIndex(item => {
                    return item.id === action.payload.id
                })), 1),
                cart: state.cart,
                cartItems: state.cartItems - 1,
                cartSubTotal: state.cartSubTotal - action.payload.price
            };
        case REMOVE_ITEM:
            return {
                ...state,
                cart: state.cart.filter(item => {
                    return item.id !== action.payload
                }),
                cartItems: state.cart.filter(item => {
                    return item.id !== action.payload
                }).length,
                cartSubTotal: state.cart.filter(item => {
                    return item.id !== action.payload
                }).map(item => {
                    return item.price
                }).reduce((total, amount) => total + amount, 0)
            };
        case CLEAR_CART:
            return {
                ...state,
                cart: [],
                cartSubTotal: 0,
                cartItems: 0
            };
        default:
            return state;
    }
};
