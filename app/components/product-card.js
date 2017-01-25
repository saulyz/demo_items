/*Import dependencies*/
import React, { Component } from 'react';
import { Link } from 'react-router';

import { Col } from 'react-bootstrap'; 
import { Image } from 'react-bootstrap'; 

class ProductCard extends Component {

    render() {
        return (
            <div className="box box-white box-product m-b-20">
                <Link to="single">
                    <Image src="/app/assets/dummy_image.gif" responsive alt="Product name"/>
                    <div className="price-product p-10">$ XXX</div>
                </Link>
            </div>
        )
    }
}

export default ProductCard;