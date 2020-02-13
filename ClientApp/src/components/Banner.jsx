import React, { Component } from 'react';
import logo from './images/ssb2015.png'

class Banner extends Component {
  render() {
    return (
      <div>
        <img className="logo" src={logo} alt="" />
        <h3 className="banner">Bringing the British-Style Brass
            Band Tradition to Tampa Bay.</h3>
      </div>
    );
  }
}

export default Banner;