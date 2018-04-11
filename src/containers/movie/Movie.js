import React, { Component } from 'react';
import { Icon } from 'react-materialize';


class Movie extends Component {
	constructor(props){
		super(props);

		this.state = {
			movie : [],
			bookmarked : false
		};
	}

  componentWillMount(){
 		let tmdb_api_key = process.env.REACT_APP_TMDB_API_KEY;
 		let movieId = this.props.match.params.movie;

    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${tmdb_api_key}`)
    .then((response) => response.json())
    .then((responseJson) => { console.log(responseJson);
      this.setState({
        movie : responseJson
      });
    })
    .catch((error) => {
      console.error(error);
    });

  }

  toggleBookmark(e){
  	e.preventDefault();

  	this.setState({
  		bookmarked: !this.state.bookmarked
  	});
  }

  renderPage(){
  	let img_url = process.env.REACT_APP_TMDB_IMAGE_URL;
  	return (
  		<div className="movieDetails">
				<h1>{this.state.movie.title}</h1>
		
				<div><img src={`${img_url}w500${this.state.movie.backdrop_path}`} alt={this.state.movie.title}/></div>
				<div>{this.state.movie.overview}</div>
				<div>{this.state.movie.release_date}</div>
			</div>
		);
  }

	render() {

		return (
			<div className="movie">
				{this.state.movie.backdrop_path ? this.renderPage() : <p>Loading...</p>}
				<a href="#" onClick={ (e) => this.toggleBookmark(e) }>
					<Icon medium>
						{this.state.bookmarked === true ? 'favorite' : 'favorite_border'}
					</Icon>
				</a>
			</div>
		);
	}
}

export default Movie;
