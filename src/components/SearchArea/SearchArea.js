import React, { Component } from 'react'

export default class SearchArea extends Component {

    constructor(){
        super()
        this.state = {
            searchedMovie: ""
        }
    }
    
    setSearchedValue = (e) => {
        e.preventDefault()
        
        this.setState({
          searchedMovie: e.target.value
        })
    }

    fetchMatchingMovies = (e) => {
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?apikey=acb05252&s=${this.state.searchedMovie}`)
        .then(resp => resp.json())
        .then( data => {console.log(data)})
    }
   

    render() {
        return (
            <div>
                <section>
                    <form>
                        <input placeholder="Search Here..." onChange={this.setSearchedValue}></input>
                        <button onClick={this.fetchMatchingMovies}>Search</button>
                    </form>
                </section>
            </div>
        )
    }
}
