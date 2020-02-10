import React, { useState, useEffect, Component } from 'react'

const navbar = (props) => {
  return (
    <nav className="center">
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right">
          <li><a href="sass.html">Home</a></li>
          <li><a href="badges.html">Concerts</a></li>
          <li><a href="collapsible.html">Christmas CD</a></li>
          <li><a href="collapsible.html">Brass Band CD</a></li>
          <li><a href="collapsible.html">Rehersals</a></li>
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
