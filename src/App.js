import React, { Component } from 'react';
import './App.css';
import {Grid,Row,Col} from 'react-bootstrap';
import GifM from './components/GifM';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      rawData:[],
      show:""
    };
    this.getTrendy = this.getTrendy.bind(this);
    this.showGifs = this.showGifs.bind(this);
  }

  componentDidMount() {
    this.getTrendy();
  }

  getTrendy(){
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=IGrXf3RUkTT4EHEN741Udg8qL76ulftv')
    .then(results => {
      return results.json();
    }).then(data =>{
      this.showGifs(data);
    })
  }

  showGifs(data){
    let gifs = data.data.map(function(gif) {
        return (
          <GifM 
            link={gif.images.original.mp4}
          />
        );
    });
    this.setState({show:gifs});
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
            <SearchBar showGifs={this.showGifs}/>
          </Col>
        </Row>

        <Row>
          <Col md={12} id="gif-container">
            {this.state.show}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
