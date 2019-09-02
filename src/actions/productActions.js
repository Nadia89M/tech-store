import { items } from "../reducers/productData";

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
export const addToCart = item => async dispatch => {
    try {
        // const res = await fetch('');
        // const data = await res.json();

        dispatch({
            type: ADD_TO_CART,
            payload: item
        });
    } catch (err) {
        console.log(err);
    }
};

// set single product
export const setSingleProduct = id => async dispatch => {
    try {
        // const res = await fetch('');
        // const data = await res.json();

        dispatch({
            type: SET_SINGLE_PRODUCT,
            payload: id
        });
    } catch (err) {
        console.log(err);
    }
};

export const increment = item => async dispatch => {
    try {
        // const res = await fetch('');
        // const data = await res.json();

        dispatch({
            type: INCREMENT,
            payload: item
        });
    } catch (err) {
        console.log(err);
    }
};

export const decrement = item => async dispatch => {
    try {
        // const res = await fetch('');
        // const data = await res.json();

        dispatch({
            type: DECREMENT,
            payload: item
        });
    } catch (err) {
        console.log(err);
    }
};

export const removeItem = id => async dispatch => {
    try {
        // const res = await fetch('');
        // const data = await res.json();

        dispatch({
            type: REMOVE_ITEM,
            payload: id
        });
    } catch (err) {
        console.log(err);
    }
};

export const clearCart = () => {
    return {
        type: CLEAR_CART
    };
};

  //add to cart
//   addToCart = id => {
//     let tempCart = [...this.state.cart];
//     let tempProducts = [...this.state.storeProducts];
//     let tempItem = tempCart.find(item => item.id === id);
//     if (!tempItem) {
//       tempItem = tempProducts.find(item => item.id === id);
//       let total = tempItem.price;
//       let cartItem = { ...tempItem, count: 1, total };
//       tempCart = [...tempCart, cartItem];
//     } else {
//       tempItem.count++;
//       tempItem.total = tempItem.price * tempItem.count;
//       tempItem.total = parseFloat(tempItem.total.toFixed(2));
//     }
//     this.setState(
//       () => {
//         return { cart: tempCart };
//       },
//       () => {
//         this.addTotals();
//         this.syncStorage();
//         this.openCart();
//       }
//     );
//   };

// increment = id => {
//     let tempCart = [...this.state.cart];
//     const cartItem = tempCart.find(item => item.id === id);
//     cartItem.count++;
//     cartItem.total = cartItem.count * cartItem.price;
//     cartItem.total = parseFloat(cartItem.total.toFixed(2));
//     this.setState(
//       () => {
//         return {
//           cart: [...tempCart]
//         };
//       },
//       () => {
//         this.addTotals();
//         this.syncStorage();
//       }
//     );
//   };

  // decrement
//   decrement = id => {
//     let tempCart = [...this.state.cart];
//     const cartItem = tempCart.find(item => item.id === id);

//     cartItem.count = cartItem.count - 1;
//     if (cartItem.count === 0) {
//       this.removeItem(id);
//     } else {
//       cartItem.total = cartItem.count * cartItem.price;
//       cartItem.total = parseFloat(cartItem.total.toFixed(2));
//       this.setState(
//         () => {
//           return {
//             cart: [...tempCart]
//           };
//         },
//         () => {
//           this.addTotals();
//           this.syncStorage();
//         }
//       );
//     }
//   };

  // removeItem
//   removeItem = id => {
//     let tempCart = [...this.state.cart];
//     tempCart = tempCart.filter(item => item.id !== id);
//     this.setState(
//       {
//         cart: [...tempCart]
//       },
//       () => {
//         this.addTotals();
//         this.syncStorage();
//       }
//     );
//   };

//   clearCart = () => {
//     this.setState(
//       {
//         cart: []
//       },
//       () => {
//         this.addTotals();
//         this.syncStorage();
//       }
//     );
//   };