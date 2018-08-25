import React, { Component } from 'react';
import GifM from './GifM';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.showSearch = this.showSearch.bind(this);
    }

    showSearch(e){
        e.preventDefault();
        fetch('http://api.giphy.com/v1/gifs/search?q=racoon&api_key=IGrXf3RUkTT4EHEN741Udg8qL76ulftv')
        .then(results => {
        return results.json();
        }).then(data =>{
        
        let searchGifs = data.data.map(function(gif) {
            return (
                <GifM 
                    link={gif.images.original.mp4}
                />
            );
        })
        this.props.showGifs(searchGifs);
        })
    }

    render() {
    return (
        <form action="" method="">
            <input type="text" name="search" placeholder="Write something"/>
            <input type="submit" value="Submit" onClick={this.showSearch}/>
        </form>
    );
  }
}

export default SearchBar;