import React, { Component } from 'react'

import './App.css';
import HeaderSection from './components/HeaderSection/HeaderSection'
import SearchArea from './components/SearchArea/SearchArea'


export default class App extends Component {

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

  render() {
    console.log("searched Movie: ", this.state.searchedMovie)
    return (
      <div className="App">
        <HeaderSection/>
        <SearchArea setSearchedValue={this.setSearchedValue}/>
      </div>  
    )
  }
}

