/*Import dependencies*/
import React, { Component } from 'react';
import { Link } from 'react-router';

import { Col } from 'react-bootstrap'; 
import { Image } from 'react-bootstrap'; 

class ProductCard extends Component {

    //this.props.id - passed item id from dataset

    render() {
        return (
            <div className="box box-white box-product m-b-20">
                <Link to={"single/" + this.props.id + "/" + this.props.last} >
                    <Image src={this.props.image} responsive className="image-product" title={this.props.title}/>
                    <div className="price-product p-10">{this.props.price}</div>
                </Link>
            </div>
        )
    }
}

export default ProductCard;