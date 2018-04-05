import React, { Component } from 'react';
import './Home.css';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

class Home extends Component{
	constructor(){
		super();
	}

	render(){
		const images = [
      {
        original: 'http://placehold.it/1000',
        thumbnail: 'http://placehold.it/250',
      },
      {
        original: 'http://placehold.it/1000',
        thumbnail: 'http://placehold.it/250'
      },
      {
        original: 'http://placehold.it/1000',
        thumbnail: 'http://placehold.it/250'
      }
    ];

		return (
			<div className="home">
				<ImageGallery items={images} lazyload={true} className="slider"/>
				<div className="newsFeed">
					<div className="top">
						<i className="fa fa-coffee"></i>
						<h2>News Feed</h2>
						<a href="#">See all news</a>
					</div>
					<div className="content">
						<div className="left">
							<img src="http://placehold.it/400x200" alt="news feed preview"/>
							<strong>News Feed subtitle</strong>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</p>
							<span>{`${ new Date() }`}</span>
						</div>
						<div className="right">
							<ul>
								<li>
									<img src="http://placehold.it/200x75" alt="news feed preview"/>
									<div>
										<strong>News Feed subtitle</strong>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat.
										</p>
										<span>{`${ new Date() }`}</span>
									</div>
								</li>
								<li>
									<img src="http://placehold.it/200x75" alt="news feed preview"/>
									<div>
										<strong>News Feed subtitle</strong>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat.
										</p>
										<span>{`${ new Date() }`}</span>
									</div>
								</li>
								<li>
									<img src="http://placehold.it/200x75" alt="news feed preview"/>
									<div>
										<strong>News Feed subtitle</strong>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat.
										</p>
										<span>{`${ new Date() }`}</span>
									</div>
								</li>
							</ul>
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
							<img src="http://placehold.it/100x75" alt="news feed preview"/>
							<div>
								<strong>News Feed subtitle</strong>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat.
								</p>
							</div>
						</div>
						<div className="right">
							<ul>
								<li>
									<img src="http://placehold.it/200x75" alt="news feed preview"/>
									<div>
										<strong>News Feed subtitle</strong>
										<p>
											Lorem ipsum dolor 
										</p>
										<span>Actor's name</span>
									</div>
								</li>
								<li>
									<img src="http://placehold.it/200x75" alt="news feed preview"/>
									<div>
										<strong>News Feed subtitle</strong>
										<p>
											Lorem ipsum
										</p>
										<span>Actor's name</span>
									</div>
								</li>
								<li>
									<img src="http://placehold.it/200x75" alt="news feed preview"/>
									<div>
										<strong>News Feed subtitle</strong>
										<p>
											Lorem ipsum
										</p>
										<span>Actor's name</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default Home;