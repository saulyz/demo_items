import React, { Component } from 'react';

import ProductList from '../components/product-list';


class PageHome extends Component {  
    render() {
        return (
            <div className="main-content home">
                <ProductList />
            </div>
        );
    }
}

export default PageHome;