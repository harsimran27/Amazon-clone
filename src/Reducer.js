export const initialState = {
    basket: [],
}

const Reducer = (state, action) => {

    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //logic for adding items to the basket 
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case 'REMOVE_TO_BASKET':
            //logic for removing from the basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`cant remove product {id:${action.id}} as its not in the basket`);
            }
            return { ...state, basket: newBasket };

        default:
            return state;
    }
}
export default Reducer;
