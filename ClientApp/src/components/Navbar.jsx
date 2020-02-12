import React, { useState, useEffect, Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

const navbar = (props) => {
  return (
    <nav className="center">
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right">
          <li><Link to='/HomePage'>Home</Link></li>
          <li><Link to="/Concerts">Concerts</Link></li>
          <li><Link to="/Christmas">Christmas CD</Link></li>
          <li><a href="collapsible.html">Brass Band CD</a></li>
          <li><Link to='/Rehersals'>Rehersals</Link></li>
          <li><a href="collapsible.html">Members</a></li>
          <li><a href="collapsible.html">Photos</a></li>
          <li><a href="collapsible.html">Videos</a></li>
          <li><a href="collapsible.html">History</a></li>
          <li><a href="collapsible.html">Links</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default navbar
