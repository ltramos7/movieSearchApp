import React, { Component } from 'react'

import './App.css';
import HeaderSection from './components/HeaderSection/HeaderSection'
import NominationsList from './components/NominationsList/NominationsList';
import SearchArea from './components/SearchArea/SearchArea'


export default class App extends Component {

  constructor(){
    super()
    this.state = {
      //need nominatedMoives here
      nominatedMovies: []
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

  render() {
    console.log("nominated movies: ", this.state.nominatedMovies)
    return (
      <div className="App">
        <HeaderSection/>
        <SearchArea setNominatedMovie={this.setNominatedMovie}/>
        <NominationsList nominatedMovies={this.state.nominatedMovies}/>
      </div>  
    )
  }
}

