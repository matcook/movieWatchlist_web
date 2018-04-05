import React, { Component } from 'react';
import './Home.css';
import { Carousel } from 'react-materialize';

class Home extends Component{
	constructor(){
		super();

		this.state = {
			nowPlaying : [],
			reviews : {}
		};
	}

	componentWillMount() {

		let tmdb_api_key = process.env.REACT_APP_TMDB_API_KEY;

		fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdb_api_key}&language=en-US&page=1`)
    .then((response) => response.json())
    .then((responseJson) => {
    	this.setState({
				nowPlaying : responseJson.results
			});

			this.getReview();

    })
    .catch((error) => {
      console.error(error);
    });
	}

	getReview() {
		let movie_id = this.state.nowPlaying[0].id;
		let tmdb_api_key = process.env.REACT_APP_TMDB_API_KEY;


		fetch(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${tmdb_api_key}&language=en-US&page=1`)
    .then((response) => response.json())
    .then((responseJson) => {
    	this.setState({
				reviews : responseJson.results
			});
    })
    .catch((error) => {
      console.error(error);
    });
	}

renderReview(){
        let date = new Date();
        date = date.toString();
        date = date.substring(0, 15);

        let reviews = this.state.reviews;
        let img_url = process.env.REACT_APP_TMDB_IMAGE_URL;
        let movie = this.state.nowPlaying[0];

            return reviews.map((review) => 
               (
                 <div className="left" key={review.id}>
                   <img src={`${img_url}w500${movie.poster_path}`} alt="news feed preview"/>
                   	 <div>
                        <strong>{review.author}</strong>
                            <p>
                                {review.content}
                            </p>
                            <span>{date}</span>
                        </div>
                    </div>
                )
            );

        }

	renderNowPlaying(){
		let movies = this.state.nowPlaying.slice(0, 4);
		let img_url = process.env.REACT_APP_TMDB_IMAGE_URL;

		return movies.map((movie) => (
				<div key={movie.id}>
					<img src={`${img_url}w300${movie.poster_path}`}/>
					<span>{movie.title}</span>
				</div>
			));
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
					{this.state.nowPlaying.length > 0 ? this.renderNowPlaying() : (<div className="preloader"><img src={require('../img/spinner.gif')} /></div>)}
						
					</div>
				</div>

				<div className="didYouKnow">
					<div className="top">
						<i className="fa fa-film"></i>
						<h2>Did You Know</h2>
					</div>
					<div className="content">

						{this.state.reviews.length > 0 ? (
            	this.renderReview()
        		) : (
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
            )
        
    } 
					</div>
				</div>
			</div>
		);
	}
}

export default Home;