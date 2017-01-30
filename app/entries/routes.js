/*Import dependencies*/
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

/*Components*/
import Application from '../components/application';
import PageHome from '../components/page-home';
import PageSingle from '../components/page-single';

const routes = (
    <Router history={browserHistory}>
        <Route component={Application}>
            <Route path="/(:last)" component={PageHome} />
            <Route path="single/(:id)/(:last)" component={PageSingle} />
            // missing not found route
        </Route>
    </Router>
);

export default routes;