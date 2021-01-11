import React, { Component } from 'react'

export default class NominationCard extends Component {
    render() {
        return (
            <div>
                <h1>Nomination card{this.props.movie.Title}</h1>
            </div>
        )
    }
}
