import React, { Component } from 'react'
import NominationCard from '../NominationCard/NominationCard'

export default class NominationsList extends Component {
    
    createNominateMovieCards = () => {
        let nominatedMovies = this.props.nominatedMovies
        return nominatedMovies.map(movie => {
            return(
                <NominationCard key={movie.imdbID} movie={movie}/>
            )
        })
    }

    render() {
        return (
            <div>
                {this.createNominateMovieCards()}
            </div>
        )
    }
}
