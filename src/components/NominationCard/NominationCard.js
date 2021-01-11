import React, { Component } from 'react'

export default class NominationCard extends Component {
    render() {
        console.log(this.props.disabled)
        let movie = this.props.movie
        return (
            <div>
                <p>Title: {movie.Title}</p>
                <p>Year: {movie.Year}</p>
                <button onClick={()=>{this.props.removeNominatedMoive(movie); this.props.toggleDisabledValue();}}>Remove</button>
            </div>
        )
    }
}
