import React, { Component } from 'react'
import SearchResultsList from '../SearchResultsList/SearchResultsList'

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
        console.log(this.state.matchingMovies)
        return (
            <div>
                <section>
                    <form>
                        <input placeholder="Search Here..." onChange={this.setSearchedMovie}></input>
                        <button onClick={this.fetchMatchingMovies}>Search</button>
                    </form>
                </section>
                <SearchResultsList matchingMovies={this.state.matchingMovies}/>
            </div>
        )
    }
}
