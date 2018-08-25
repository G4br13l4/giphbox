import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class GifM extends Component {
    render() {
    return (
      <Col md={4}> 
        <video 
            autoPlay="true" 
            loop="true" 
            src={this.props.link}
        />
      </Col>
    );
  }
}

export default GifM;