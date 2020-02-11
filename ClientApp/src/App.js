import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import HomePage from './components/HomePage'
import Rehersals from './components/Rehersals'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Banner />
          <Navbar />

          <Switch>
            <Route path="/HomePage" exact component={HomePage} />
            <Route path="/Rehersals" exact component={Rehersals} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
