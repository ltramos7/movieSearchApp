import React, { Component } from 'react'
import MatchingMovieCard from '../MatchingMovieCard/MatchingMovieCard'
import './SearchResultsList.css'

export default class SearchResultsList extends Component {

    createMatchingMovieCards = () => {
        const matchingMovies = this.props.matchingMovies
        return matchingMovies.map(movie =>{
            return (
                <MatchingMovieCard key={movie.imdbID} movie={movie} setNominatedMovie={this.props.setNominatedMovie} disabled={this.props.disabled} toggleDisabledValue={this.props.toggleDisabledValue}/>
            )
        })
    }

    render() {
        return (
            <div className="searchResultsListContainer">
                {this.createMatchingMovieCards()}
            </div>
        )
    }
}
