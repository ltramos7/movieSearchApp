import React, { Component } from 'react'
import './NominationCard.css'

export default class NominationCard extends Component {
    render() {
        let movie = this.props.movie
        return (
            <div className="nominationCard">
                <p>Title: {movie.Title}</p>
                <p>Year: {movie.Year}</p>
                <button onClick={()=>{this.props.removeNominatedMoive(movie)}}>Remove</button>
            </div>
        )
    }
}
