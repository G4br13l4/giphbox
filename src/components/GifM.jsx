import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class GifM extends Component {
    render() {
    return (
        <Col md={2}>
            <video 
                className="gif"
                autoPlay="" 
                loop="true"
                muted="true"
                src={this.props.link}
            />
        </Col>  
    );
  }
}

export default GifM;