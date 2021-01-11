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
        return (
            <div>
                {/* <p>Title: {this.props.title}</p> */}
                <p>Title: {this.props.movie.Title}</p>
                {/* <p>Release Year: {this.props.year}</p> */}
                <p>Release Year: {this.props.movie.Year}</p>
                <button disabled={this.state.disabled} onClick={() => {this.props.setNominatedMovie(); this.disableNominateBtn();}}>Nominate</button>
                {/* <button disabled={this.state.disabled} onClick={() => {this.props.setNominatedMovie(this.props.movie); this.disableButton();}}>Nominate</button> */}
            </div>
        )
    }
}
