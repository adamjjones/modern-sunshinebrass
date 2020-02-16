import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import HomePage from './components/HomePage'
import Concerts from './components/Concerts'
import Christmas from './components/Christmas'
import BrassBand from './components/BrassBand'
import Rehersals from './components/Rehersals'
import Members from './components/Members'
import History from './components/History'
import Contact from './components/Contact'
import Videos from './components/Videos'
import Links from './components/Links'


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
            <Dropdown.Item className="menu-item" href="/BrassBand">BrassBand CD</Dropdown.Item>
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
            <Route path="/BrassBand" exact component={BrassBand} />
            <Route path="/Rehersals" exact component={Rehersals} />
            <Route path="/Members" exact component={Members} />
            <Route path="/Videos" exact component={Videos} />
            <Route path="/History" exact component={History} />
            <Route path="/Contact" exact component={Contact} />
            <Route path="/Links" exact component={Links} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
