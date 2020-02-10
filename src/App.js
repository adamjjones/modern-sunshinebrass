import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'


class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Navbar />
      </div>
    )
  }
}

export default App
