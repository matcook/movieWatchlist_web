import React, { Component } from 'react';
import List from '../../components/List.js';

class NowPlaying extends Component{
  constructor(props){
    super(props);

    this.state = {
      nowPlaying : []
    };
  }

  componentWillMount(){
    let tmdb_api_key = process.env.REACT_APP_TMDB_API_KEY;

    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdb_api_key}&page=1`)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        nowPlaying : responseJson.results
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render(){
    return (
      <div className="nowPlaying">
        <h1>Now Playing</h1>
        <List movies={this.state.nowPlaying} match={this.props.match}/>
      </div>
    );
  }
}

export default NowPlaying;