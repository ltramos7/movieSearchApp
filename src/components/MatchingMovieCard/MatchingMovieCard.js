import React, { Component } from 'react'

export default class MatchingMovieCard extends Component {

    constructor(){
        super()
        this.state = {
            disabled: false
        }
    }

    disableNominateBtn = () => {
        this.setState({
            disabled: true
        })
    }

    render() {
        let movie = this.props.movie
        return (
            <div>
                {/* <p>Title: {this.props.title}</p> */}
                <p>Title: {movie.Title}</p>
                {/* <p>Release Year: {this.props.year}</p> */}
                <p>Release Year: {movie.Year}</p>
                <button disabled={this.state.disabled} onClick={() => {this.props.setNominatedMovie(movie); this.disableNominateBtn();}}>Nominate</button>
                {/* <button disabled={this.state.disabled} onClick={() => {this.props.setNominatedMovie(this.props.movie); this.disableButton();}}>Nominate</button> */}
            </div>
        )
    }
}
