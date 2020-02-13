import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const navbar = (props) => {
  return (
    <Fragment>
      <div className="nav-wrapper">

        <nav className="center">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
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
        </nav>
      </div>
    </Fragment>
  )
}
// {
//   $(document).ready(function () {
//     $('.sidenav').sidenav();
//   })
// };

export default navbar
