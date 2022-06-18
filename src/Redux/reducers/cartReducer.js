let defaultState = {
    selectedItems: { items: [], restaurantName: '' }
}

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            let newState = { ...state };
            if (action.payload.checkBoxValue) {
                console.log("Adding item to cart")
                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload],
                    restaurantName: action.payload.restaurantName
                }
            }
            else {
                console.log("removing item from cart")
                newState.selectedItems = {
                    items: [...newState.selectedItems.items.filter(
                        item => item.title !== action.payload.title
                    )],
                    restaurantName: action.payload.restaurantName
                }
            }
            // console.log(newState.selectedItems, "🔥")
            return newState;
        }
        default:
            return state
    }
}

export default cartReducer;