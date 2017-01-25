/*Import dependencies*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Col } from 'react-bootstrap'; 
import { Image } from 'react-bootstrap'; 

class ProductCard extends Component {

    render() {
        return (
            <div className="card">
                <Image src="/app/assets/dummy_image.gif" responsive />
                <h3 className="product-title">Product name</h3>
                <div className="product-price p-10">$ XXX</div>
            </div>
        )
    }
}

export default ProductCard;