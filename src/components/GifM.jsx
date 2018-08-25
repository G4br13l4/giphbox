import React, { Component } from 'react';

class GifM extends Component {
    render() {
    return (
      
        <video 
            className="gif"
            autoPlay="true" 
            loop="true"
            muted="true"
            src={this.props.link}
        />
      
    );
  }
}

export default GifM;