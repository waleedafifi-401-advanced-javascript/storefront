import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import categories from './categories-slice.js';
import products from './products-slice.js';
import cart from './cart-slice.js';

let reducer = combineReducers({ categories, products, cart });

const store = configureStore({ reducer });

export default store;