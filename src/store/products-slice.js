import axios from 'axios';
import {
    createSlice
} from '@reduxjs/toolkit';

const url = `https://amman-api-server.herokuapp.com/products`;

const productsSlice = createSlice({
    name: 'products',

    initialState: {
        products: [],
        currentProduct: {},
        processing: false
    },

    reducers: {
        process: (state, action) => {
            state.processing = !state.processing;
        },
        loadProducts: (state, action) => {
            const {
                payload
            } = action;
            state.products = payload;
        },
        loadOneProduct: (state, action) => {
            const {
                payload
            } = action;
            state.currentProduct = payload[0];
        },
        add: (state, action) => {
            const {
                payload
            } = action;
            let atIndex = state.products.findIndex(
                (product) => product._id === payload._id,
            );
            if (atIndex > -1) {
                let product = state.products[atIndex];
                product.inStock = product.inStock - 1;
                state.products = [
                    ...state.products.slice(0, atIndex),
                    product,
                    ...state.products.slice(atIndex + 1),
                ];
            }
        },
        remove: (state, action) => {
            const {
                payload
            } = action;
            let atIndex = state.products.findIndex(
                (product) => product._id === payload._id,
            );
            if (atIndex > -1) {
                let product = state.products[atIndex];
                product.inStock = product.inStock + payload.quantity;
                state.products = [
                    ...state.products.slice(0, atIndex),
                    product,
                    ...state.products.slice(atIndex + 1),
                ];
            }
        },
    },
});

export const {
    process,
    loadProducts,
    loadOneProduct,
    add,
    remove,
} = productsSlice.actions;

export const getProducts = () => async (dispatch) => {
    let results = await axios.get(
        `${url}`,
    );
    dispatch(loadProducts(results.data.results));
};

export const getOneProduct = (id) => async (dispatch) => {
    console.log(`${url}/${id}`);
    let results = await axios.get(
        `${url}/${id}`,
    );
    dispatch(loadOneProduct(results.data));
};

export const addToCart = (product) => async (dispatch) => {
    dispatch(process());
    let results = await axios.put(
        `${url}/${product._id}`, {
            ...product,
            inStock: product.inStock - 1,
        },
    );
    dispatch(add(results.data));
    dispatch(process());
};

export const removeFromCart = (product) => async (dispatch) => {
    dispatch(process());

    console.log(product);

    await axios.put(
        `${url}/${product._id}`, {
            ...product,
            inStock: product.inStock + product.quantity - 1,
        },
    );
    dispatch(remove(product));
    dispatch(process());
};

export default productsSlice.reducer;