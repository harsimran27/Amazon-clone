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
            return { state }

        default:
            return state;
    }
}
export default Reducer;
