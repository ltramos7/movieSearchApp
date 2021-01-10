import React, { Component } from 'react'

import './App.css';
import HeaderSection from './components/HeaderSection/HeaderSection'
import SearchArea from './components/SearchArea/SearchArea'


export default class App extends Component {

  constructor(){
    super()
    this.state = {
      
    }
  }

  

  render() {
    
    return (
      <div className="App">
        <HeaderSection/>
        <SearchArea/>
      </div>  
    )
  }
}

