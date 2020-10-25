import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import category from './categories';
import product from './products';
console.log(category)

let reducers = combineReducers({ category , product });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
