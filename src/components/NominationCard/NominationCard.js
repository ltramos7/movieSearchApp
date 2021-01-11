import React, { Component } from 'react'

export default class NominationCard extends Component {
    render() {
        return (
            <div>
                <p>Title: {this.props.movie.Title}</p>
                <p>Year: {this.props.movie.Year}</p>
                <button onClick={this.props.removeNominatedMoive}>Remove</button>
            </div>
        )
    }
}
