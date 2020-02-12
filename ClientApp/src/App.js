import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import HomePage from './components/HomePage'
import Concerts from './components/Concerts'
import Christmas from './components/Christmas'
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
            <Route path="/Concerts" exact component={Concerts} />
            <Route path="/Christmas" exact component={Christmas} />
            <Route path="/Rehersals" exact component={Rehersals} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
