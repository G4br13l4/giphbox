import React, { Component } from 'react';
import Gif from './Gif';
import {Col, FormGroup, FormControl, Button} from 'react-bootstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleChange(e){
        let value = e.target.value;
        this.setState({words: value});
    }

    resetForm(){
        this.setState({words: ""});
    }

    handleSubmit(e){
        e.preventDefault(); 
        let words= this.state.words;
        fetch(`https://api.giphy.com/v1/gifs/search?q=${words}&api_key=IGrXf3RUkTT4EHEN741Udg8qL76ulftv`)
        .then(results => {
        return results.json();
        }).then(data =>{
            this.props.showGifs(data);
        })
        this.resetForm();
    }

    render() {
    return (
        <Col md={7} xs={12} id="search-bar">
            <form>
                <FormGroup>
                    <FormControl value={this.state.words} onChange={this.handleChange} type="text" placeholder="Write something" />
                </FormGroup>
                <Button onClick={this.handleSubmit} id="search-btn" type="submit">Search GIFs!!</Button>
            </form>
        </Col>
    );
  }
}

export default SearchBar;