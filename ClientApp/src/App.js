import React, { Fragment, useState } from 'react'
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
import Photos from './components/Photos'
import Videos from './components/Videos'
import Links from './components/Links'
import AdminAddEvent from './components/AdminAddEvent'
import Footer from './components/Footer'

const components = [
  { url: "/HomePage", label: "Home", component: HomePage },
  { url: "/Concerts", label: "Concerts", component: Concerts },
  { url: "/Rehearsals", label: "Rehearsals", component: Rehearsals },
  { url: "/Christmas", label: "Christmas CD", component: Christmas },
  { url: "/BrassBand", label: "Brass Band CD", component: BrassBand },
  { url: "/Members", label: "Members", component: Members },
  { url: "/Photos", label: "Photos", component: Photos },
  { url: "/Videos", label: "Videos", component: Videos },
  { url: "/History", label: "History", component: History },
  { url: "/Contact", label: "Contact Us", component: Contact },
  { url: "/Links", label: "Links", component: Links },
  { url: "/AdminViewEvents", label: null, component: AdminAddEvent },
  { url: "/AdminAddEvent", label: null, component: AdminAddEvent },
  { url: "/AdminEditEvent/:id", label: null, component: AdminAddEvent },
  { url: "/AdminDeleteEvent/:id", label: null, component: AdminAddEvent }
]

const App = (props) => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => {
    setOpen(!open)
  }
  const closeMenu = (e) => {
    setOpen(false)
  }
  return (
    <div>
      <Router>
        <Dropdown className="dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-button"
            onClick={toggleMenu}>
            <i className='fa fa-bars'></i>
          </Dropdown.Toggle>
          {open ?
            <Dropdown.Menu className="dropdown-menu" show={true}>
              {components.filter(c => {
                return c.label
              }).map(c => {
                return <Link className='dropdown-menu-item'
                  key={c.label} to={c.url} onClick={closeMenu}
                  onSelect={closeMenu}>
                  {c.label}
                </Link>
              })}
            </Dropdown.Menu>
            : <Fragment />
          }
        </Dropdown>
        <div onClick={closeMenu}>

          <Banner />
          <div className="nav-wrapper">

            <nav className="center">
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {
                  components.filter(c => {
                    return c.label
                  }).map(c => {
                    return (
                      <li key={c.label}><Link to={c.url}>{c.label}</Link></li>
                    )
                  })
                }
              </ul>
            </nav>
          </div>
          <Switch>
            {
              components.map(c => {
                return <Route key={c.label} path={c.url} exact component={c.component} />
              })
            }
            <Redirect from="/" to="HomePage" />
          </Switch>
        </div>
      </Router>
    </div >
  )
}

export default App
