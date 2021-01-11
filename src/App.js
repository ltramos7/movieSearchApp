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
      disabled: false
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

  toggleDisabledValue = () => {
    console.log("toggleDisabledValue function reached")
  }

  render() {
    console.log("nominated movies: ", this.state.nominatedMovies)
    return (
      <div className="App">
        <HeaderSection/>
        <SearchArea setNominatedMovie={this.setNominatedMovie} disabled={this.state.disabled} toggleDisabledValue={this.toggleDisabledValue}/>
        <NominationsList nominatedMovies={this.state.nominatedMovies} removeNominatedMoive={this.removeNominatedMoive} disabled={this.state.disabled} toggleDisabledValue={this.toggleDisabledValue}/>
      </div>  
    )
  }
}

