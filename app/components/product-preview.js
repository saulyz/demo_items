import React, { Component } from 'react';

import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class ProductPreview extends Component {

    constructor() {
        super();
        this.state = { 
            item: [], 
            item_price: [],
            item_measurements: ''
        };

        //props.id - passed product ID. Becomes a key for data retrieval
    }

    componentDidMount() {
        let fetchUrl = 'http://localhost:3001/item/' + this.props.id + '/data';
        console.log ('have URL: ', fetchUrl);
        fetch(fetchUrl)
            .then (result => {
                let result_body = result.json();
                console.log ('text format: ', result_body);
                console.log ('response type: ', result.type)
                return result_body;
            })
            .then (itemObj => {
                this.setState({ item: itemObj });
                console.log ('json format: ', itemObj);
                if (itemObj.price != null) {
                    this.setState({item_price: itemObj.price.amounts.EUR});
                }
                if (itemObj.measurements != null) {
                    this.setState({item_measurements: itemObj.measurements.display});
                }
            });
    }

    render() {
        return (
            <Row>
                <Col xs={12} md={6} lg={4}>
                    <div className="box box-white p-10 m-b-20">
                        <Image src={this.state.item.image} responsive className="image-product"/>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={8}>
                    <Row>
                        <Col xs={12}>
                            <div className="box box-white p-10 m-b-20">
                                <h1 className="title-product">{this.state.item.title}</h1>
                                <div className="price-product price-product-single m-b-20">{(this.state.item_price != '') ? this.state.item_price : 'Price Upon Request'}</div>
                                <div className="metainfo-product">
                                    <strong>Measurements:</strong>
                                    <p>{this.state.item_measurements}</p>
                                </div>
                                <div className="p-t-10">
                                    <Row>
                                        <Col xs={12} sm={6} className="p-v-10 p-h-20">
                                            <Button bsSize="large" block>Purchase</Button>
                                        </Col>
                                        <Col xs={12} sm={6} className="p-v-10 p-h-20">
                                            <Button bsSize="large" block>Make Offer</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="box box-white p-10">
                                <p dangerouslySetInnerHTML={{__html: this.state.item.description}}></p>
                                <p><strong>Creator:</strong> {(this.state.item.creators != '') ? this.state.item.creators : 'n.d.'}</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default ProductPreview;