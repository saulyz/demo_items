/*Import inhouse styling*/
import "../styles/main.scss";

/*Import dependencies*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/*Routes (and Application) */
import routes from '../entries/routes';

/*Reducers*/
import ShopItems from '../reducers/shop-items';
import Favorites from '../reducers/favorites';

const store = createStore (
    ShopItems,
    Favorites
);

render(
    <Provider store={store}>
        routes
    </Provider>,
    document.getElementById('root')
);