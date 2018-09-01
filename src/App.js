import React, { Component } from 'react';
import './App.css';
import {Grid,Row,Col} from 'react-bootstrap';
import Gif from './components/Gif';
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
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=IGrXf3RUkTT4EHEN741Udg8qL76ulftv')
    .then(results => {
      return results.json();
    }).then(data =>{
      this.showGifs(data);
    })
  }

  showGifs(data){
    let gifs = data.data.map(function(gif,index) {
        return (
          <Gif 
            poster={gif.images['480w_still'].url}
            link={gif.images.original.mp4}
          />
        );
    });
    this.setState({show:gifs});
  }

  render() {
    return (
      <Grid fluid>
        <Row className="h-center" id="navbar">
          <Col md={2} xs={12}>
            <header>
              <video 
                autoPlay="true" 
                loop="true"
                poster="https://media.giphy.com/media/26FeUQtvzuhdfxOE0/giphy.gif"
                src="https://media.giphy.com/media/26FeUQtvzuhdfxOE0/giphy.mp4"
                alt="logo" 
              />
              <h2>THE GIPHY BOX</h2>
            </header>
          </Col>
          <SearchBar showGifs={this.showGifs}/>
          <Col md={1} xs={3}>
            <img onClick={this.getTrendy} src="./assets/trending.png"/>
          </Col>
        </Row>
        
        <Row className="h-center">
          <Col md={10} xs={12}>
            <Row>
            {this.state.show}
            </Row>
          </Col>        
        </Row>
      </Grid>
    );
  }
}

export default App;
