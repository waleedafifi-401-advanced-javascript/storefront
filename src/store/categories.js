import axios from 'axios';
import { loading } from './loading';
const url = `https://amman-api-server.herokuapp.com/categories`;

let initialState = {
    categories: [{
            name: 'electronics',
            displayName: 'Electronics',
            description: 'electronics'
        },
        {
            name: 'food',
            displayName: 'Food',
            description: 'food'
        },
        {
            name: 'clothing',
            displayName: 'Clothing',
            description: 'clothing'
        }

    ],
    activeCategory: 'clothing',
};

export default (state = {categories: []}, action) => {

    let { type, payload } = action;
  
    switch (type) {
      case 'CHANGE_ACTIVE':
        return {
          ...state,
          activeCategory: payload
        }
      case 'GET_CATEGORIES':
        return {
          categories: payload,
          activeCategory: '' 
        };
      default:
        return state;
    }
  }
  
  export const getCategories = () => {
  
  
    return async dispatch => {
  
      dispatch(loading(true));
      let response = await axios({ url, method: 'GET' });
      dispatch(loading(false));
  
      dispatch({
        type: 'GET_CATEGORIES',
        payload: response.data.results
          .filter(product => product.name !== 'admin')
      })
  
    }
  
  }
  
  export const changeActiveCategory = name => ({
    type: 'CHANGE_ACTIVE',
    payload: name,
  })