import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import Banner from './components/Banner'
import HomePage from './components/HomePage'
import Concerts from './components/Concerts'
import Christmas from './components/Christmas'
import BrassBand from './components/BrassBand'
import Rehearsals from './components/Rehearsals'
import Members from './components/Members'
import History from './components/History'
import Contact from './components/Contact'
// import Photos from './components/Photos'
import Videos from './components/Videos'
import Links from './components/Links'

const components = [
  { url: "/HomePage", label: "Home", component: HomePage },
  { url: "/Concerts", label: "Concerts", component: Concerts },
  { url: "/Rehearsals", label: "Rehearsals", component: Rehearsals },
  { url: "/Christmas", label: "Christmas CD", component: Christmas },
  { url: "/BrassBand", label: "Brass Band CD", component: BrassBand },
  { url: "/Members", label: "Members", component: Members },
  // { url: "/Photos", label: "Photos", component: Photos },
  { url: "/Videos", label: "Videos", component: Videos },
  { url: "/History", label: "History", component: History },
  { url: "/Contact", label: "Contact Us", component: Contact },
  { url: "/Links", label: "Links", component: Links }
]

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-button">
              <i className='fa fa-bars'></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu">
              {
                components.map(c => {
                  return <Dropdown.Item className="dropdown-menu-item" href={c.url}>{c.label}</Dropdown.Item>

                })
              }
            </Dropdown.Menu>
          </Dropdown>
          <Banner />
          {/* <Navbar components={components} /> */}
          <div className="nav-wrapper">

            <nav className="center">
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {
                  components.map(c => {
                    return (
                      <li><Link to={c.url}>{c.label}</Link></li>
                    )
                  })
                }
              </ul>
            </nav>
          </div>
          <Switch>
            {
              components.map(c => {
                return <Route path={c.url} exact component={c.component} />
              })
            }
            <Redirect from="/" to="HomePage" />
          </Switch>
        </Router>
      </div >
    )
  }
}

export default App
