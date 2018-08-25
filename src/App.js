import React, { Component } from 'react';
import './App.css';
import {Grid,Row,Col} from 'react-bootstrap';
import GifM from './components/GifM';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      show:""
    };
    
  }

  componentDidMount() {
    this.showTrendy();
  }

  showTrendy(){
    fetch("http://api.giphy.com/v1/gifs/trending?api_key=IGrXf3RUkTT4EHEN741Udg8qL76ulftv")
      .then((resp) => resp.json()) 
      .then(function(data) {
        let results = data.data
        console.log(results)
        
    })
  }

  render() {
    return (
      <Grid fluid>
        <Row className="h-center">
          <Col md={2}>
            <header>
              <video 
                autoPlay="true" 
                loop="true" 
                src="https://media.giphy.com/media/26FeUQtvzuhdfxOE0/giphy.mp4"
                alt="logo" 
              />
              <h2>The Giphy Box</h2>
            </header>
          </Col>
          <Col md={8} id="search-bar">
            <input type="text" name="search" placeholder="Write something"></input>
            <button>Search</button>
            <GifM link="https://media.giphy.com/media/26FeUQtvzuhdfxOE0/giphy.mp4"/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
