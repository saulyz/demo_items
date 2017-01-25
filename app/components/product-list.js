/*Import dependencies*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ProductCard from '../components/product-card';

import { Grid } from 'react-bootstrap'; 
import { Row } from 'react-bootstrap'; 
import { Col } from 'react-bootstrap'; 

class ProductList extends Component {

    render() {
        return (
            <Grid className="view-all-products">
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <ProductCard />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <ProductCard />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <ProductCard />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <ProductCard />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <ProductCard />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <ProductCard />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default ProductList;
