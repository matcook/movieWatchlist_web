import React, { Component } from 'react';
import List from '../../components/List.js';
import Movie from '../movie/Movie.js';
import { Route, Switch } from 'react-router-dom';


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
    let currentScreen = this.props.match.url;

    return (
      <div className="topRated">
        <Switch>  
          <Route path={`${currentScreen}/:movie`} component={Movie} />
          <Route path={`${currentScreen}/`} render={ (props) => {
            return(
              <div>
                <h1>Top Rated</h1>
                <List movies={this.state.topRated} match={this.props.match}/>
              </div>
            );
          } } />
        </Switch>
      </div>
    );
  }
}

export default TopRated;