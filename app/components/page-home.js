import React, { Component } from 'react';

import List from '../components/list';


class PageHome extends Component {  
    render() {
        return (
            <div className="main-content home">
                <List />
            </div>
        );
    }
}

export default PageHome;