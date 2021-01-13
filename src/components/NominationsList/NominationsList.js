import React, { Component } from 'react'
import NominationCard from '../NominationCard/NominationCard'
import './NominationsList.css'

export default class NominationsList extends Component {
    
    createNominateMovieCards = () => {
        let nominatedMovies = this.props.nominatedMovies
        return nominatedMovies.map(movie => {
            return(
                <NominationCard key={movie.imdbID} movie={movie} removeNominatedMoive={this.props.removeNominatedMoive} disabled={this.props.disabled} toggleDisabledValue={this.props.toggleDisabledValue}/>
            )
        })
    }

    render() {
        return (
            <div className="nominationsListContainer">
                {this.createNominateMovieCards()}
            </div>
        )
    }
}
