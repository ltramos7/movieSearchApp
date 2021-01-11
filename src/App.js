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

  setNominatedMovie = () => {
    console.log("set nominated movie function reached")
    // this.setState({
    //   nominatedMovies: [...this.state.nominatedMovies, movie]
    // })
  }

  render() {
    console.log("nominate movies: ", this.state.nominatedMovies)
    return (
      <div className="App">
        <HeaderSection/>
        <SearchArea setNominatedMovie={this.setNominatedMovie}/>
        {/* <NominationsList/> which is render NominationCard */}
        <NominationsList/>
      </div>  
    )
  }
}

