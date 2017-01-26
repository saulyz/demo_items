import * as ShopActionTypes from '../actiontypes/shop';

export const loadItems = data => {
    return {
        type: ShopActionTypes.LOAD_ITEMS, 
        data
    };
};
