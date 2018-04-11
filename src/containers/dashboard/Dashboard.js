import React, { Component } from 'react';
import './Dashboard.css';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile.js';
import Watchlist from './Watchlist.js';

class Dashboard extends Component {
	constructor(props){
		super(props);
	}

	logout() {
		console.log("signed out");
	}

	render() {
		let currentScreen = this.props.match.url

		return (
			<div className="dashboard">
				<h1>Dashboard</h1>
				<aside>
					<Link to={`${currentScreen}/profile`}>Profile</Link>
					<Link to={`${currentScreen}/watchlist`}>Watchlist</Link>
				</aside>
				<Route path={`${currentScreen}/profile`} component={Profile} />
				<Route path={`${currentScreen}/watchlist`} component={Watchlist} />

				<button onClick={ () => this.logout() }>Logout</button>
			</div>
		);
	}
}

export default Dashboard;
