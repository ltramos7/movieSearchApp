import React, { Component } from 'react'

export default class NominationsList extends Component {
    
    createNominateMovieCards = () => {
        console.log("createNominateMovieCards function met")
    }

    render() {
        return (
            <div>
                {this.createNominateMovieCards()}
            </div>
        )
    }
}
