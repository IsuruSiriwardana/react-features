import React, { Component } from 'react';
import MovieItem from './MovieItem';
import './MovieList.css';

class MovieList extends Component {

    render() {

        var movies = this.props.movies;
        var movieItemList = movies.map ( (movie, index) => 
            <MovieItem 
                key={index}
                movieName={movie.movieName}
                moviePoster={movie.moviePoster}
                >
            </MovieItem>
        );
        return (
            <ul id="movieList" className="movie-list">
                {movieItemList}
            </ul>
        );
    }
}

export default MovieList;