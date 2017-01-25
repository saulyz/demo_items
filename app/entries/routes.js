/*Import dependencies*/
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

/*Components*/
import Application from '../components/application';
import PageHome from '../components/page-home';
import PageSingle from '../components/page-single';

const routes = (
    <Router history={browserHistory}>
        <Route component={Application}>
            <Route path="/" component={PageHome} />
            <Route path="single" component={PageSingle} />
        </Route>
    </Router>
);

export default routes;