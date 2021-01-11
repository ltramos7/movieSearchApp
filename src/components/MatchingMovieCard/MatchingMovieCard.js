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
                <p>Title: {this.props.title}</p>
                <p>Release Year: {this.props.year}</p>
                <button disabled={this.state.disabled} onClick={this.disableNominateBtn}>Nominate</button>
            </div>
        )
    }
}
