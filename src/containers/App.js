import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from "../components/Header.js";
import Home from './Home.js';
import Discover from './Discover.js';
import Movies from './movies/Movies.js';
import TVShows from './movies/TVShows.js';
import Footer from '../components/Footer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header/>
          <main>
            <Route exact path="/" component={Home}/>
            <Route path="/discover" component={Discover} />
            <Route path="/movies" component={Movies} />
            <Route path="/tvshows" component={TVShows} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;