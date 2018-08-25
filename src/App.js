import React, { Component } from 'react';
import './App.css';
import { Grid,Row,Col} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row className="h-center">
          <Col md={2}>
            <header>
              <video autoPlay="true" loop="true" src="https://media.giphy.com/media/26FeUQtvzuhdfxOE0/giphy.mp4" className="" alt="logo" />
              <h2>The Giphy Box</h2>
            </header>
          </Col>
          <Col md={8} id="search-bar">
            <input type="text" name="search" placeholder="Write something"></input>
            <button>Search</button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
