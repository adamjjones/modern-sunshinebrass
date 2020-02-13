import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
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
        <Router><Dropdown className="dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Navigation
          </Dropdown.Toggle>

          <Dropdown.Menu className="menu">
            <Dropdown.Item className="menu-item" href="/HomePage">Home</Dropdown.Item>
            <Dropdown.Item className="menu-item" href="/Concerts">Concerts</Dropdown.Item>
            <Dropdown.Item className="menu-item" href="/Christmas">Christmas CD</Dropdown.Item>
            <Dropdown.Item className="menu-item" href="/Rehersals">Rehersals</Dropdown.Item>
            <Dropdown.Item className="menu-item" href="/BrassBandCD">BrassBandCD</Dropdown.Item>
            <Dropdown.Item className="menu-item" href="/Members">Members</Dropdown.Item>
            <Dropdown.Item className="menu-item" href="/Photos">Photos</Dropdown.Item>
            <Dropdown.Item className="menu-item" href="/Videos">Videos</Dropdown.Item>
            <Dropdown.Item className="menu-item" href="/History">History</Dropdown.Item>
            <Dropdown.Item className="menu-item" href="/Links">Links</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
