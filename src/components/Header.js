import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
	constructor(){
		super();

		this.state = {
			searchQuery : ''
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
					<div className="logo">
						<span>LOGO</span>
					</div>
					<nav>
						<a href="#">Home</a>
						<a href="#">Discover</a>
						<a href="#">Movies</a>
						<a href="#">TV Shows</a>
					</nav>
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