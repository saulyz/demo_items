/*Import inhouse styling*/
import "../styles/main.scss";

/*Import dependencies*/
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


import Application from '../components/application';
import PageHome from '../components/page-home';
import PageSingle from '../components/page-single';


render((
    <Router history={browserHistory}>
        <Route component={Application}>
            <Route path="/" component={PageHome} />
            <Route path="single" component={PageSingle} />
        </Route>
    </Router>
), document.getElementById('root'));