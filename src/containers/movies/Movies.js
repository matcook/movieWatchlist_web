import React, { Component } from 'react';
import './Movies.css';
import { Route, Switch } from 'react-router-dom';
import Upcoming from "./Upcoming.js";
import NowPlaying from "./NowPlaying";
import TopRated from "./TopRated";
import Movie from '../movie/Movie.js';

class Movies extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let currentScreen = this.props.match.path;

    return (
      <div className="movies">
        <div className="asideNav">
          <a href={`${currentScreen}/nowPlaying`}>Now Playing</a>
          <a href={`${currentScreen}/upcoming`}>Upcoming</a>
          <a href={`${currentScreen}/topRated`}>Top Rated</a>
        </div>
        <div className="tabs">
          <Switch>
            <Route exact path={`${currentScreen}/`} component={NowPlaying} />
            <Route path={`${currentScreen}/nowPlaying`} component={NowPlaying} />
            <Route path={`${currentScreen}/upcoming`} component={Upcoming} />
            <Route path={`${currentScreen}/topRated`} component={TopRated} />                    
            <Route path={`${currentScreen}/:movie`} component={Movie} />   
          </Switch>                 
        </div>
      </div>
    );
  }
}

export default Movies;