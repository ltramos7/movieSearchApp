import React, { Component } from 'react'

import './App.css';
import HeaderSection from './components/HeaderSection/HeaderSection'
import NominationsList from './components/NominationsList/NominationsList';
import SearchArea from './components/SearchArea/SearchArea'


export default class App extends Component {

  constructor(){
    super()
    this.state = {
      nominatedMovies: [],
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

  render() {
  
    return (
      <div className="App">
        <HeaderSection/>
        <SearchArea setNominatedMovie={this.setNominatedMovie} matchingMovies={this.state.matchingMovies} disabled={this.state.disabled}/>
        <NominationsList nominatedMovies={this.state.nominatedMovies} removeNominatedMoive={this.removeNominatedMoive} disabled={this.state.disabled}/>
      </div>  
    )
  }
}

