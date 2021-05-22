import { createStore } from 'redux';

const initState = {
    shirts: [
        { title: 'That Sounds Like A Horrible Idea. What Time?', url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-mens-t-shirts-that-sounds-like-a-horrible-idea-what-time-men-s-tshirt-27979227988083_1200x.jpg?v=1619430070', price: 12.99, id: 0, quantity: 1, discount: 1 },
        { title: `Can't Work Today My Arm Is In A Cast`, url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-mens-t-shirts-can-t-work-today-my-arm-is-in-a-cast-men-s-tshirt-27979147378803_1200x.jpg?v=1619427619', price: 12.99, id: 1, quantity: 1, discount: 1 },
        { title: 'Fitness Taco In My Mouth', url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/fitness_20taco_20mens_20dark_20heather_20grey_20shirt_08be81b0-b754-49a2-ae21-c3b33d6e407d_1200x.png?v=1621331714', price: 12.99, id: 2, quantity: 1, discount: 1 },
        { title: 'Vaccines Cause Adults', url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-mens-t-shirts-vaccines-cause-adults-men-s-tshirt-15475944030323_1200x.jpg?v=1619832073', price: 12.99, id: 3, quantity: 1, discount: 1 },
        { title: `I Do It For The Ho's`, url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-mens-t-shirts-i-do-it-for-the-ho-s-men-s-tshirt-28135567458419_1200x.jpg?v=1621360428', price: 12.99, id: 4, quantity: 1, discount: 1 },
        { title: `Prestige Worldwide Boats & Hoes`, url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-mens-t-shirts-prestige-worldwide-boats-hoes-men-s-tshirt-27979223728243_1200x.jpg?v=1619429951', price: 12.99, id: 5, quantity: 1, discount: 1 },
        { title: `Callahan Auto Parts`, url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-mens-t-shirts-callahan-auto-parts-men-s-tshirt-27979152359539_1200x.jpg?v=1619428818', price: 12.99, id: 6, quantity: 1, discount: 1 },
        { title: `Of Course I Talk To Myself, I Need Expert Advice`, url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-mens-t-shirts-of-course-i-talk-to-myself-i-need-expert-advice-men-s-tshirt-27979193352307_1200x.jpg?v=1619425064', price: 12.99, id: 7, quantity: 1, discount: 1 },
        { title: ` Wonder if Beer Thinks About Me`, url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-mens-t-shirts-wonder-if-beer-thinks-about-me-men-s-tshirt-15629901824115_1200x.jpg?v=1620157512', price: 12.99, id: 8, quantity: 1, discount: 1 },
        // { title: `Daddy Shark`, url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-mens-t-shirts-daddy-shark-men-s-tshirt-28191304155251_1200x.jpg?v=1621372036', price: 12.99, id:10, quantity: 1, },
    ],
    showCart: false,
    shoppingCart: [],
    login: { email: '', password: '', username: '' },
};

const getIndex = (shoppingCart, actionId) => {
    // console.log(shoppingCart);
    // console.log(actionId);
    let doubleElement = [false, actionId];
    shoppingCart.map((element, index) => {
        if (element.id === parseInt(actionId)) {
            doubleElement = [true, index];
        }
    });
    return doubleElement;
};

const reducer = (state = initState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'addCart': {
            let itemOnCart = getIndex(newState.shoppingCart, action.id);
            if (itemOnCart[0]) {
                const itemIndex = itemOnCart[1];
                const itemToAdd = newState.shoppingCart[itemIndex];
                itemToAdd.quantity++;
                newState.shoppingCart[itemIndex] = itemToAdd;
                return newState;
            } else {
                newState.shoppingCart.push(newState.shirts[action.id]);
                return newState;
            }
        }
        case 'toggleCart': {
            newState.showCart = !state.showCart;
            return newState;
        }

        case 'updateLogin': {
            newState.login = action.login;
            return newState;
        }
        default:
            return state;
    }
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
