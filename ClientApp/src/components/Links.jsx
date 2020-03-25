import React, { Component } from 'react';
import Footer from './Footer'

class Links extends Component {
  render() {
    return (
      <div className="content">
        <h2>Links!</h2>
        <ul className='albumlist' id='links'>
          {/* <li><a href="http://www.brasscast.com">BrassCast.com by Peter Ryan</a></li> */}
          <li><a href="http://www.bandsman.co.uk">BandsMan.co.uk</a></li>
          <li><a href="http://www.brassbandofcentralflorida.org">Brass Band of Central Florida (Orlando)</a></li>
          {/* <li><a href="http://members.nuvox.net/~on.jwclymer/cbb.html">Cincinatti Brass Band (Ohio)</a></li> */}
          <li><a href="http://www.nabba.org">NABBA.ORG (North American Brass Band Association)</a></li>
          <li><a href="http://tampabaysymphony.com">Tampa Bay Symphony</a></li>
          {/* <li><a href="http://sunshinebrass.com.au">Australia's Sunshine Brass Band</a></li> */}
        </ul>
        <Footer />
      </div>
    );
  }
}

export default Links;