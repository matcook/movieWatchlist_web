import React, { Component } from 'react';
import './Home.css';

import { Carousel } from 'react-materialize';

class Home extends Component{
	constructor(){
		super();
	}

	render(){
		let date = new Date();
		date = date.toString();
		date = date.substring(0, 15);

		return (
			<div className="home">
				
				<Carousel options={{ fullWidth: true }}>
				  <div className='red'>
				    <h2>First Panel</h2>
				    <p className='white-text'>This is your first panel</p>
				  </div>
				  <div className='amber'>
				    <h2>Second Panel</h2>
				    <p className='white-text'>This is your second panel</p>
				  </div>
				  <div className='green'>
				    <h2>Third Panel</h2>
				    <p className='white-text'>This is your third panel</p>
				  </div>
				  <div className='blue'>
				    <h2>Fourth Panel</h2>
				    <p className='white-text'>This is your fourth panel</p>
				  </div>
				</Carousel>

				<div className="newsFeed">
					<div className="top">
						<i className="fa fa-coffee"></i>
						<h2>News Feed</h2>
						<a href="#">See all news</a>
					</div>
					<div className="content">
						<div className="left">
							<img src="http://placehold.it/715x353" alt="news feed preview"/>
							<strong>News Feed subtitle</strong>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. 
							</p>
							<span>{date}</span>
						</div>
						<div className="right">
							<ul>
								<li>
									<img src="http://placehold.it/145x150" alt="news feed preview"/>
									<div>
										<strong>News Feed subtitle</strong>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua.
										</p>
										<span>{date}</span>
									</div>
								</li>
								<li>
									<img src="http://placehold.it/145x150" alt="news feed preview"/>
									<div>
										<strong>News Feed subtitle</strong>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. 
										</p>
										<span>{date}</span>
									</div>
								</li>
								<li>
									<img src="http://placehold.it/145x150" alt="news feed preview"/>
									<div>
										<strong>News Feed subtitle</strong>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua.
										</p>
										<span>{date}</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="inTheatre">
					<div className="top">
						<i className="fa fa-film"></i>
						<h2>In Theatre</h2>
					</div>
					<div className="content">
						<div>
							<img src="http://placehold.it/250x375"/>
						</div>
						<div>
							<img src="http://placehold.it/250x375"/>
						</div>
						<div>
							<img src="http://placehold.it/250x375"/>
						</div>
						<div>
							<img src="http://placehold.it/250x375"/>
						</div>
					</div>
				</div>

				<div className="didYouKnow">
					<div className="top">
						<i className="fa fa-film"></i>
						<h2>Did You Know</h2>
					</div>
					<div className="content">
						<div className="left">
							<img src="http://placehold.it/535x570" alt="news feed preview"/>
							<div>
								<strong>News Feed subtitle</strong>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat.
								</p>
								<span>{date}</span>
							</div>
						</div>
						<div className="right">
							<div className="rightTop">
								<div>
									<img src="http://placehold.it/290x270" alt="news feed preview"/>
									<div>
										<strong>News Feed subtitle</strong>
										<p>
											Lorem ipsum dolor 
										</p>
										<span>Actor's name</span>
									</div>
								</div>
								<div>
									<img src="http://placehold.it/290x270" alt="news feed preview"/>
									<div>
										<strong>News Feed subtitle</strong>
										<p>
											Lorem ipsum
										</p>
										<span>Actor's name</span>
									</div>
								</div>
							</div>
							<div className="rightBottom">
								<img src="http://placehold.it/610x302" alt="news feed preview"/>
								<div>
									<strong>News Feed subtitle</strong>
									<p>
										Lorem ipsum
									</p>
									<span>Actor's name</span>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default Home;