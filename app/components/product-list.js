/*Import dependencies*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ProductCard from '../components/product-card';

import { Grid } from 'react-bootstrap'; 
import { Row } from 'react-bootstrap'; 
import { Col } from 'react-bootstrap'; 

class ProductList extends Component {

    constructor() {
        super();
        this.state = { items: [] };
    }

    componentDidMount() {
        fetch('http://localhost:3001/items/data')
            .then (result => {
                let result_body = result.text();
                console.log ('text format: ', result_body);
                console.log ('response type: ', result.type)
                return result_body;
            })
            .then (text => {
                return text ? JSON.parse(text) : {}
            })
            .then (items_json => {
                this.setState({items:items_json});
                console.log ('json format: ',items_json);
            })
    }

    render() {
        return (
            <Grid className="view-all-products">
                <Row>
                    { this.state.items.map (item => { 
                        return (
                            <Col xs={12} md={6} lg={4}>
                                <ProductCard title={item.title} price={item.integerId}/>
                            </Col>
                        )
                    }) }
                </Row>
            </Grid>
        )
    }
}

export default ProductList;
