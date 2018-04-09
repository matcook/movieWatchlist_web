import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component{
	constructor(){
		super();

		this.state = {
			searchQuery : '',
			movies : []
		};
	}

	onSearchTextChange(e){
		this.setState({
			searchQuery : e.currentTarget.value
		});
	}

	search(){
		console.log("User is looking for :" + this.state.searchQuery );
	}

	render(){
		return (
			<div className="header">
				<div className="row">
					<Navbar brand="logo" right>
						<NavItem href="/">Home</NavItem>
						<NavItem href="/discover">Discover</NavItem>
						<NavItem href="/movies">Movies</NavItem>
						<NavItem href="/shows">TV Shows</NavItem>
					</Navbar>
					<div className="signin">
						<a href="#login">Login</a>
						<a href="#register">Register</a>
					</div>
				</div>
				<div className="row">
					<a href="#search" onClick={ ()=> this.search() }><i className="fa fa-search"></i></a>
					<input type="search" className="search" onChange={ (e)=> this.onSearchTextChange(e) }/>
				</div>
			</div>
		);
	}
}

export default Header;