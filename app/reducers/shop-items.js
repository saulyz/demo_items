import * as ShopActionTypes from '../actiontypes/shop';

const initialState = {};

export default function ShopItems (state=initialState, action) {
    switch (action.type) {
        case ShopActionTypes.LOAD_ITEMS:
        return [
            // fetch data and load items array
        ];
    }
}