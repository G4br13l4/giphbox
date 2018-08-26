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
        fetch(`http://api.giphy.com/v1/gifs/search?q=${words}&api_key=IGrXf3RUkTT4EHEN741Udg8qL76ulftv`)
        .then(results => {
        return results.json();
        }).then(data =>{
            this.props.showGifs(data);
        })
        this.resetForm();
    }

    render() {
    return (
        <Col md={8}>
            <form>
                <FormGroup>
                    <FormControl value={this.state.words} onChange={this.handleChange} type="text" placeholder="Write something" />
                </FormGroup>
                <Button onClick={this.handleSubmit} type="submit">Search GIFs!!</Button>
            </form>
        </Col>
    );
  }
}

export default SearchBar;