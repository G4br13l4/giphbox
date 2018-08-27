import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class GifM extends Component {
    render() {
    return (
        <Col md={3} xs={12} className="no-pad h-center video-box">
                <video 
                    className="gif"
                    autoPlay="true" 
                    loop="true"
                    muted="true"
                    src={this.props.link}
                />
            
        </Col>  
    );
  }
}

export default GifM;