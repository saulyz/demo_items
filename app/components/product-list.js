/*Import dependencies*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';

import ProductCard from '../components/product-card';

import { Grid } from 'react-bootstrap'; 
import { Row } from 'react-bootstrap'; 
import { Col } from 'react-bootstrap'; 
import { Button } from 'react-bootstrap';


class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            items: [], 
            items_prices: [],
            last_item: 0
        };
    }

    //this.fetchItems = this.fetchItems.bind(this);

    componentDidMount() {

        // after we return from single view, last is passed via props
        let last;
        if (this.props.last !== undefined) {
            last = this.props.last;
        }
        if ((last == 0) || (last === undefined)) {
            this.fetchItems(0);
        } else {
            this.fetchItems(0, last);
        }
    }

    fetchItems(start, limit) {

        //Skipping variation on limit setting, since the task has no description on limit variation
        //limit=9 will be a nice default block

        if (start == undefined) {
            start = 0
        }
        let query = `http://localhost:3001/items/data/?start=${start}`;
        if (limit !== undefined) {
            query = `${query}&limit=${limit}`;
        }
        console.log ('querying: ', query);

        fetch(query)
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
                console.log ('json format: ', itemObj);

                // Updating state with new data
                let new_items = update (this.state.items, {
                    $push: itemObj
                });
                let new_items_prices = update (this.state.items_prices, {
                    $push: all_prices
                });
                let new_last_item = Number(this.state.last_item) + Number(itemObj.length);

                this.setState({ items: new_items });
                this.setState({ items_prices: new_items_prices });
                this.setState({ last_item: new_last_item })
            })
        // end of fetch
    }

    render() {
        return (
            <Grid className="view-all-products">
                <Row>
                    { this.state.items.map ((item, index) => { 
                        return (
                            <Col key={index} xs={12} sm={6} lg={4}>
                                <ProductCard id={item.id} title={item.title} price={this.state.items_prices[index]} image={item.image} last={this.state.last_item}/>
                            </Col>
                        )
                    }) }
                </Row>
                <Row>
                    <Col className="center-text p-v-20">
                        <Button type="submit" onClick={() => this.fetchItems(this.state.last_item)} bsSize="large" className="p-h-20">Load More</Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default ProductList;
