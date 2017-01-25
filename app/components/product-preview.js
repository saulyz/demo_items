import React, { Component } from 'react';

import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class ProductPreview extends Component {  
    render() {
        return (
            <Row>
                <Col xs={12} md={6} lg={4}>
                    <div className="box box-white p-10 m-b-20">
                        <Image src="/app/assets/dummy_image.gif" responsive />
                    </div>
                </Col>
                <Col xs={12} md={6} lg={8}>
                    <Row>
                        <Col xs={12}>
                            <div className="box box-white p-10 m-b-20">
                                <h1 className="title-product">Single product page title</h1>
                                <div className="price-product price-product-single">Price Upon Request</div>
                                <div className="metainfo-product">
                                    <strong>Mesurements:</strong>
                                    <p>H 35.43 in. W 39.37 in. D 38.58 in.</p>
                                </div>
                                <div className="p-t-10">
                                    <Row>
                                        <Col xs={6}>
                                            <Button bsSize="large" block>Purchase</Button>
                                        </Col>
                                        <Col xs={6}>
                                            <Button bsSize="large" block>Make Offer</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="box box-white p-10">
                                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur earum consequatur, praesentium ad veritatis laborum, recusandae corporis provident rem aliquid tempora. Minus ullam maxime enim excepturi animi numquam, reiciendis quis.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default ProductPreview;