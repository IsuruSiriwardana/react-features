import React, {Component} from 'react';
import './MovieItem.css';

class MovieItem extends Component {
    
    render() {
        return (
            <div id="movieItem" className="movie-item">
                <p id="movieItemName" className="movie-item-name">{this.props.movieName}</p>
                <img id="movieItemPoster" className="movie-item-poster" src={this.props.moviePoster} alt="Movie poster"/>
            </div>
        );
    }
}

export default MovieItem;