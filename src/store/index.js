import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';


import category from './categories';
import product from './products';
import cart from './cart';
import loadingReducer from './loading';

let reducers = combineReducers({ category , product , cart, loadingReducer});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
