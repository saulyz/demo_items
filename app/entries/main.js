/*Import inhouse styling*/
import "../styles/main.scss";

/*Import dependencies*/
import React from 'react';
import { render } from 'react-dom';

/*Routes*/
import routes from '../entries/routes';

render(
    routes,
    document.getElementById('root')
);