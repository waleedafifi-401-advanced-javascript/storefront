import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import category from './categories';
import product from './products';
import cart from './cart';

console.log(category)

let reducers = combineReducers({ category , product , cart});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
