import React, { Component } from 'react';
import { Link } from 'react-router';

import ProductPreview from '../components/product-preview';

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class PageSingle extends Component {  

    //this.props.params.id - passed item id from Link (Router)
    //id is optional Route path param

    render() {
        return (
            <div className="main-content single">
                <Grid className="view-single-product">
                    <p className="m-b-20">&larr; <Link to="/">back</Link></p>
                    <ProductPreview id={this.props.params.id}/>
                </Grid>
            </div>
        );
    }
}

export default PageSingle;