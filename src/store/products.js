let initialState = {
    products: [{
            category: 'electronics',
            name: 'Samsung TV',
            description: '4k Smart tv 65"',
            price: '999.99',
            inventoryCount: 100,
            image: 'https://blueprint-api-production.s3.amazonaws.com/uploads/story/thumbnail/104994/aecbf447-71c2-4053-9091-d1d420737198.jpg'
        },
        {
            category: 'food',
            name: 'Burgger',
            description: 'KFC',
            price: '11.99',
            inventoryCount: 15,
            image: 'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg'
        },
        {
            category: 'food',
            name: 'Banana',
            description: 'Banana',
            price: '16.99',
            inventoryCount: 2000,
            image: 'https://www.news-medical.net/image.axd?picture=2018%2F2%2Fbanana.jpg'
        },
        {
            category: 'clothing',
            name: 'Infant Newborn Baby Girls Boys',
            description: '100% Wool',
            price: '13.99',
            inventoryCount: 500,
            image: 'https://ae01.alicdn.com/kf/H55c9f12577894062b56f3b1434b92f1ah/Infant-Newborn-Baby-Girls-Boys-Spring-Autumn-Ribbed-Solid-Clothes-Sets-Long-Sleeve-Bodysuits-Elastic-Pants.jpg_Q90.jpg_.webp'
        },
        {
            category: 'clothing',
            name: 'Brand New Toddler Newborn Baby Crawling Shoes',
            description: '100% Wool',
            price: '13.99',
            inventoryCount: 500,
            image: 'https://ae01.alicdn.com/kf/HTB1z65_Kb5YBuNjSspoq6zeNFXaO/2018-Brand-New-Toddler-Newborn-Baby-Crawling-Shoes-Boy-Girl-Lamb-Slippers-Prewalker-Trainers-Fur-Winter.jpg_Q90.jpg_.webp'
        },
        {
            category: 'clothing',
            name: 'Spring Autumn Clothing',
            description: '100% Wool',
            price: '13.99',
            inventoryCount: 500,
            image: 'https://ae01.alicdn.com/kf/H6b279d7690134b4d94e4ac1efe9eb907v/2019-Baby-Spring-Autumn-Clothing-Toddler-Baby-Boy-Clothes-Hooded-Tops-Long-Sleeve-Romper-Striped-Long.jpg_Q90.jpg_.webp'
        },

    ]
};

// export default (state = initialState) => {
//     return state;
// };

export default (state = initialState, action) => {

    const {
        type,
        payload
    } = action;
    switch (type) {
        case 'DECREASEINVENTORY':
            return {
                ...state, products: state.products.map(product => {
                    if (product.name === payload) {
                        product.inventoryCount--;
                    }
                    return product;
                })
            }
        case 'INCREASEINVENTORY':
            return {
                ...state, products: state.products.map(product => {
                    if (product.name === payload) {
                        product.inventoryCount++;
                    }
                    return product;
                })
            }
        default:
            return state;
    }
}
export const decreaseInventory = name => {
    return {
        type: 'DECREASEINVENTORY',
        payload: name,
    }
}

export const increaseInventory = name => {
    return {
        type: 'INCREASEINVENTORY',
        payload: name,
    }
}