import React, { Component } from 'react'
import SearchResultsList from '../SearchResultsList/SearchResultsList'
import './SearchArea.css'

export default class SearchArea extends Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         // searchedMovie: ""
    //         // matchingMovies: []
    //     }
    // }
    
    // setSearchedMovie = (e) => {
    //     e.preventDefault()
        
    //     this.setState({
    //       searchedMovie: e.target.value
    //     })
    // }

    // fetchMatchingMovies = (e) => {
    //     e.preventDefault()
    //     fetch(`http://www.omdbapi.com/?apikey=acb05252&s=${this.state.searchedMovie}`)
    //     .then(resp => resp.json())
    //     .then( data => this.setState({matchingMovies: data.Search}))
    // }
   
    render() {
    
        return (
            <div className="searchAreaContainer">
                <div className="searchBarContainer">
                    <form>
                        <input placeholder="Search Here..." onChange={this.props.setSearchedMovie}></input>
                        <button className="searchButton" onClick={this.props.fetchMatchingMovies}>Search</button>
                    </form>
                </div>
                {/* <SearchResultsList matchingMovies={this.state.matchingMovies} setNominatedMovie={this.props.setNominatedMovie}/> */}
            </div>
        )
    }
}
