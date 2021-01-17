import React, { Component } from 'react'

import './App.css';
import HeaderSection from './components/HeaderSection/HeaderSection'
import NominationsList from './components/NominationsList/NominationsList';
import SearchResultsList from './components/SearchResultsList/SearchResultsList'
import SearchArea from './components/SearchArea/SearchArea'


export default class App extends Component {

  constructor(){
    super()
    this.state = {
      searchedMovie: "",
      nominatedMovies: [],
      matchingMovies: []
    }
  }


  setNominatedMovie = (movie) => {
    
    if(this.state.nominatedMovies.length < 5){
      this.setState({
        nominatedMovies: [...this.state.nominatedMovies, movie]
      })
    }else{
      alert("Sorry, only 5 nominations are allowed.")
    }
  }

  removeNominatedMoive = (removedMovie) => {
    this.setState({
      nominatedMovies: this.state.nominatedMovies.filter((movie) => {
        return movie !== removedMovie
      })
    })
  }

  setSearchedMovie = (e) => {
    e.preventDefault()
    
    this.setState({
      searchedMovie: e.target.value
    })
  }

  fetchMatchingMovies = (e) => {
    e.preventDefault()
    fetch(`https://www.omdbapi.com/?apikey=acb05252&s=${this.state.searchedMovie}`)
    .then(resp => resp.json())
    .then( data => this.determineResult(data))
  }

  determineResult = (data) => {
    if (data.Response == "False"){
      alert("Unable find matching movies. Please check spelling.")
    }else {
      this.setState({matchingMovies: data.Search})
    }
  }

 

  render() {
  
    return (
      <div className="App">
        <HeaderSection/>
        <SearchArea fetchMatchingMovies={this.fetchMatchingMovies} setSearchedMovie={this.setSearchedMovie} setNominatedMovie={this.setNominatedMovie} matchingMovies={this.state.matchingMovies} disabled={this.state.disabled}/>
        <SearchResultsList matchingMovies={this.state.matchingMovies} setNominatedMovie={this.setNominatedMovie} />
        <NominationsList nominatedMovies={this.state.nominatedMovies} removeNominatedMoive={this.removeNominatedMoive} disabled={this.state.disabled}/>
      </div>  
    )
  }
}

