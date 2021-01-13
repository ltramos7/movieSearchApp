import React, { Component } from 'react'
import './MatchingMovieCard.css'
export default class MatchingMovieCard extends Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         disabled: false
    //     }
    // }

    // disableNominateBtn = () => {
    //     this.setState({
    //         disabled: true
    //     })
    // }

    render() {
        let movie = this.props.movie
        return (
            <div className="matchingMovieCard">
                <p>Title: {movie.Title}</p>
                <p>Release Year: {movie.Year}</p>
                {/* <button disabled={this.state.disabled} onClick={() => {this.props.setNominatedMovie(movie); this.disableNominateBtn();}}>Nominate</button> */}
                <button disabled={this.props.disabled} onClick={() => {this.props.setNominatedMovie(movie); this.props.toggleDisabledValue();}}>Nominate</button>
            </div>
        )
    }
}
