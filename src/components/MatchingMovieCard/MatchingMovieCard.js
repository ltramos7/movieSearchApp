import React, { Component } from 'react'

export default class MatchingMovieCard extends Component {
    render() {
        return (
            <div>
                <p>Title: {this.props.title}</p>
                <p>Release Year: {this.props.year}</p>
            </div>
        )
    }
}
