import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
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
						<NavItem href="#">Home</NavItem>
						<NavItem href="#">Discover</NavItem>
						<NavItem href="#">Movies</NavItem>
						<NavItem href="#">TV Shows</NavItem>
					</Navbar>
					<div className="signin">
						<a href="#">Login</a>
						<a href="#">Register</a>
					</div>
				</div>
				<div className="row">
					<a href="#" onClick={ ()=> this.search() }><i className="fa fa-search"></i></a>
					<input type="search" className="search" onChange={ (e)=> this.onSearchTextChange(e) }/>
				</div>
			</div>
		);
	}
}

export default Header;