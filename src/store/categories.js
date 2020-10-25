let initialState = {
    categories: [
        { name: 'electronics', displayName: 'Electronics', description: 'electronics' },
        { name: 'food', displayName: 'Food', description: 'food' },
        { name: 'clothing', displayName: 'Clothing', description: 'clothing' }

    ],
    activeCategory: 'jazz',
};

export default (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {
        case 'CHANGEACTIVE':
            return {
            categories: state.categories,
            activeCategory: payload
            }
        default:
            return state;
    }
};

export const changeActiveCategory = name => {
    return {
    type: 'CHANGEACTIVE',
    payload: name,
    }
};