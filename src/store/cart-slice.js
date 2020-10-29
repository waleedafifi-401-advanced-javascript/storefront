import {
    createSlice
} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',

    initialState: {
        cart: [],
        cartCount: 0,
        drawer: false
    },

    reducers: {
        addToCart: (state, action) => {
            const {
                payload
            } = action;
            let atIndex = state.cart.findIndex(
                (product) => product._id === payload._id,
            );
            if (atIndex === -1) {
                let product = {
                    ...payload,
                    quantity: 1,
                    total: payload.price
                };
                state.cart.push(product);
            } else {
                let product = {
                    ...payload,
                    quantity: state.cart[atIndex].quantity + 1,
                    total: state.cart[atIndex].total + payload.price,
                };
                state.cart = [
                    ...state.cart.slice(0, atIndex),
                    product,
                    ...state.cart.slice(atIndex + 1),
                ];
            }
            state.cartCount = state.cartCount + 1;
        },
        removeFromCart: (state, action) => {
            const {
                payload
            } = action;

            state.cart = state.cart.filter((product) => product._id !== payload._id);
            console.log(state.cart);

            state.cartCount = state.cartCount - payload.quantity;
        },
        toggleDrawer: (state, action) => {
            const {
                payload
            } = action;
            state.drawer = payload;
        },
    },
});
export const {
    addToCart,
    removeFromCart,
    toggleDrawer
} = cartSlice.actions;

export default cartSlice.reducer;