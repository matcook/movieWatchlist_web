import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
	constructor(){
		super();
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

				<div className="row"></div>
			</div>
		);
	}
}

export default Header;