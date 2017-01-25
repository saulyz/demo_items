/*Import dependencies*/
import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from '../components/header';


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                { this.props.children }
            </div>
        );
    }
}

export default App;