import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from "../components/Header.js";
import Home from './Home.js';
import Discover from './Discover.js';
import Movies from './movies/Movies.js';
import TVShows from './movies/TVShows.js';
import Footer from '../components/Footer.js';
import Register from './authentication/Register.js';
import Login from './authentication/Login.js';
import Search from './search/Search.js';
import Dashboard from './dashboard/Dashboard.js';


class App extends Component {
  constructor(){
    super();

    this.state = {
      queryString : ''
    };
  }

  searchQuery(query) {
    console.log("user searched for " + query);
    this.setState({queryString : query});
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header searchQuery={ (query) => this.searchQuery(query) }/>
          <main>
            {this.state.queryString !== '' ? (
                <Search searchQuery={this.state.queryString}/>
              ) : (
              <div>
                <Route exact path="/" component={Home}/>
                <Route path="/discover" component={Discover} />
                <Route path="/movies" component={Movies} />
                <Route path="/tvshows" component={TVShows} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
              </div>
              )}
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;