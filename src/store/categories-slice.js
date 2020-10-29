import axios from 'axios';
import {
    createSlice
} from '@reduxjs/toolkit';

const url = `https://amman-api-server.herokuapp.com/categories`;

const categoriesSlice = createSlice({
    name: 'categories',

    initialState: {
        categories: [],
        currentCategory: ''
    },

    reducers: {
        setCurrentCategory: (state, action) => {
            const {
                payload
            } = action;
            state.currentCategory = payload;
        },
        loadCategories: (state, action) => {
            const {
                payload
            } = action;
            state.categories = payload;
            state.currentCategory = payload[0].name;
        },
    },
});

export const {
    setCurrentCategory,
    loadCategories
} = categoriesSlice.actions;

export const getCategories = () => async (dispatch) => {
    let results = await axios.get(
        `${url}`,
    );
    console.log(results.data.results);
    dispatch(loadCategories(results.data.results));
};

export default categoriesSlice.reducer;