import categoryReducer, { changeActiveCategory } from '../store/categories';
import productReducer from '../store/products';
import cartReducer, { addToCart } from '../store/cart';

describe('category tests', () =>{
    it('should have an initial state', () => {
        const state = categoryReducer(undefined, {});
        expect(state.categories.length).toBe(3);
        expect(state.categories[0].name).toBe('electronics');
        expect(state.categories[1].name).toBe('food');
        expect(state.activeCategory).toBe('clothing');
    });

    it('should change active state', () => {
        const state = categoryReducer(undefined, changeActiveCategory('food'));
        expect(state.activeCategory).toBe('food');
    });
});

describe('product tests', () => {
    it('has the correct initial state', () => {
        const state = productReducer(undefined, {});
        expect(state.products.length).toBe(6);
        expect(state.products.filter(product => product.category === 'clothing').length).toBe(3);
        expect(state.products.filter(product => product.category === 'food').length).toBe(2);
        expect(state.products.filter(product => product.category === 'electronics').length).toBe(1);
    });
});

describe('cart tests', () => {
    it('has the correct initial state', () => {
        const state = cartReducer(undefined, {});
        expect(state.items.length).toBe(0);
    });

    it('can add an item to the cart', () => {
        const state = cartReducer(undefined, addToCart('mittens'));
        expect(state.items.length).toBe(1);
    });
});
