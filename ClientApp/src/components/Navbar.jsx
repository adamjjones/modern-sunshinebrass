import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const navbar = (props) => {
  return (
    <Fragment>
      <div className="nav-wrapper">

        <nav className="center">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/HomePage">Home</Link></li>
            <li><Link to="/Concerts">Concerts</Link></li>
            <li><Link to="/Christmas">Christmas CD</Link></li>
            <li><Link to="/BrassBand">Brass Band CD</Link></li>
            <li><Link to="/Rehearsals">Rehearsals</Link></li>
            <li><Link to="/Members">Members</Link></li>
            <li><a href="collapsible.html">Photos</a></li>
            <li><Link to="/Videos">Videos</Link></li>
            <li><a href="/History">History</a></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Links">Links</Link></li>
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
