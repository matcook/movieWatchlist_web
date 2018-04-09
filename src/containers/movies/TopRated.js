import React, { Component } from 'react';
import List from '../../components/List.js';


class TopRated extends Component{
  	constructor(props){
    super(props);

    this.state = {
      topRated : []
    };
  }

  componentWillMount(){
    let tmdb_api_key = process.env.REACT_APP_TMDB_API_KEY;

    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdb_api_key}&page=1`)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        topRated : responseJson.results
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render(){
    return (
      <div className="topRated">
        <h1>Top Rated</h1>
        <List movies={this.state.topRated} match={this.props.match}/>
      </div>
    );
  }
}

export default TopRated;