import React, { Component } from 'react'
import SearchResultsList from '../SearchResultsList/SearchResultsList'
import './SearchArea.css'

export default class SearchArea extends Component {

    constructor(){
        super()
        this.state = {
            searchedMovie: "",
            matchingMovies: []
        }
    }
    
    setSearchedMovie = (e) => {
        e.preventDefault()
        
        this.setState({
          searchedMovie: e.target.value
        })
    }

    fetchMatchingMovies = (e) => {
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?apikey=acb05252&s=${this.state.searchedMovie}`)
        .then(resp => resp.json())
        .then( data => this.setState({matchingMovies: data.Search}))
    }
   
    render() {
    
        return (
            <div>
                <section className="searchAreaContainer">
                    <form>
                        <input placeholder="Search Here..." onChange={this.setSearchedMovie}></input>
                        <button className="searchButton" onClick={this.fetchMatchingMovies}>Search</button>
                    </form>
                </section>
                <SearchResultsList matchingMovies={this.state.matchingMovies} setNominatedMovie={this.props.setNominatedMovie} disabled={this.props.disabled} toggleDisabledValue={this.props.toggleDisabledValue}/>
            </div>
        )
    }
}
