let initialState = {
    items: [],
}

export default (state = initialState, action) => {
    console.log('in add to cart', state)
    const {
        type,
        payload
    } = action;
    switch (type) {
        case 'ADDTOCART':
            return (!state.items.includes(payload)) ?
                {
                    ...state,
                    items: [...state.items, payload]
                } :
                {
                    ...state
                }
        case 'REMOVEFROMCART':
            return {
                ...state,
                items: state.items.filter(item => item.name !== payload)
            }
            default:
                return state;
    }
}

export const addToCart = item => {
    return {
        type: 'ADDTOCART',
        payload: item,
    }
}
export const removeFromCart = item => {
    return {
        type: 'REMOVEFROMCART',
        payload: item,
    }
}