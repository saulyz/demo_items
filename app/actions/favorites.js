import * as ShopActionTypes from '../actiontypes/shop';

export const addFavorite = id => {
    return {
        type: ShopActionTypes.ADD_FAVORITE, 
        id
    };
};

export const removeFavorite = index => {
    return {
        type: ShopActionTypes.REMOVE_FAVORITE,
        index
    };
};