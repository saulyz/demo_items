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
        this.state = { 
            items: [], 
            items_prices: [] 
        };
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
                let itemObj = items_json.items;
                const all_prices = itemObj.map((i) => {
                    let price = [];
                    if (i.price != null) {
                        console.dir (i.price.amounts);
                        price.push (i.price.amounts.EUR);
                    } else {
                        console.log (i.price);
                        price.push('Price Upon Request');
                    }
                    return price;
                })
                this.setState({ items: itemObj });
                this.setState({ items_prices: all_prices });
                console.log ('json format: ', itemObj);
            })
    }

    render() {
        return (
            <Grid className="view-all-products">
                <Row>
                    { this.state.items.map ((item, index) => { 
                        return (
                            <Col key={index} xs={12} sm={6} lg={4}>
                                <ProductCard id={item.id} title={item.title} price={this.state.items_prices[index]} image={item.image}/>
                            </Col>
                        )
                    }) }
                </Row>
            </Grid>
        )
    }
}

export default ProductList;
