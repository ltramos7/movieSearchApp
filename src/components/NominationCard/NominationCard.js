import React, { Component } from 'react'

export default class NominationCard extends Component {
    render() {
        let movie = this.props.movie
        return (
            <div>
                <p>Title: {movie.Title}</p>
                <p>Year: {movie.Year}</p>
                <button onClick={()=>{this.props.removeNominatedMoive(movie)}}>Remove</button>
            </div>
        )
    }
}
