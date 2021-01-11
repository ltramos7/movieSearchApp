import React, { Component } from 'react'
import MatchingMovieCard from '../MatchingMovieCard/MatchingMovieCard'

export default class SearchResultsList extends Component {

    createMatchingMovieCards = () => {
        const matchingMovies = this.props.matchingMovies
        return matchingMovies.map(movie =>{
            return (
                <MatchingMovieCard key={movie.imdbID} movie={movie} setNominatedMovie={this.props.setNominatedMovie} disabled={this.props.disabled}/>
            )
        })
    }

    render() {
        return (
            <div>
                {this.createMatchingMovieCards()}
            </div>
        )
    }
}
