import React, { Component } from 'react';
import GifM from './GifM';
import {Col, FormGroup, FormControl, Button} from 'react-bootstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        let value = e.target.value;
        this.setState({words: value});
    }

    handleSubmit(e){
        e.preventDefault();
        let words= this.state.words;
        fetch(`http://api.giphy.com/v1/gifs/search?q=${words}&api_key=IGrXf3RUkTT4EHEN741Udg8qL76ulftv`)
        .then(results => {
        return results.json();
        }).then(data =>{
            console.log(data)
            this.props.showGifs(data);
        })
    }

    render() {
    return (
        <Col md={8} className="prueba">
            <form>
                <FormGroup>
                    <FormControl type="text" placeholder="Write some" />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </form>
        </Col>
        // <form>
        //     <input id="search-bar" type="text" name="search" placeholder="Write something" onChange={this.handleChange}/>
        //     <input type="submit" value="Search" onClick={this.handleSubmit}/>
        // </form>
    );
  }
}

export default SearchBar;