import * as ShopActionTypes from '../actiontypes/shop';

const initialState = {};

export default function Favorites (state=initialState, action) {
    switch (action.type) {
        case ShopActionTypes.ADD_FAVORITE:
            return [
                // ...state,
                // {} with a new object
            ];
        
        case ShopActionTypes.REMOVE_FAVORITE:
            return [
                // ...state.slice(0, action.index),
                // ...state.slice(action.index + 1),
            ];

        default:
            return state;
    }
}