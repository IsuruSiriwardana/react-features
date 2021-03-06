import React, {Component} from 'react';
import './MovieItem.css';

class MovieItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMouseIn: false,
        };
    };

    onMouseEnter = (event) => {
        this.setState ({
            isMouseIn: true,
        });
    };

    onMouseLeave = (event) => {
        this.setState({
            isMouseIn: false,
        })
    };

    onMovieRemoveButtonClick = () => {
        this.props.onMovieItemRemoveClicked(this.props.movieName);
    };

    onMouseClick = () => {
        console.log("Movie: ", this.props.movieName);
        this.props.onMovieItemClicked(this.props.movieName);
    };

    render() {
        
        return (
            <div id="movieItem" className="movie-item" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.onMouseClick}>
                <p id="movieItemName" className="movie-item-name">{this.props.movieName}</p>
                <img id="movieItemPoster" className="movie-item-poster" src={this.props.moviePoster} alt="Movie poster Not Available"/>
                {
                    this.state.isMouseIn && 
                    (<button id="movieItemRemoveButton" className="movie-item-remove-button" onClick={this.onMovieRemoveButtonClick}>X</button>)
                }
            </div>
        );
    };
}

export default MovieItem;