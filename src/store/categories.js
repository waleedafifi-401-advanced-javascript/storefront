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

export default (state = initialState, action) => {

    let {
        type,
        payload
    } = action;

    switch (type) {
        case 'CHANGEACTIVE':
            return {
                ...state,
                activeCategory: payload
            }
        default:
            return state;
    }
}

export const changeActiveCategory = name => {
    return {
        type: 'CHANGEACTIVE',
        payload: name,
    }
};