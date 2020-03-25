import React, { Component } from 'react';
import Footer from './Footer'

class Members extends Component {
  render() {
    return (
      <div className="content">
        <h4>Interested in Joining?</h4>
        <p>
          NOTE: The Sunshine Brass Band Inc. is a not for profit
          corporation, supported in part by a grant
          from the Arts Council of Hillsborough County.</p>
        <p>The band's members are from throughout the Tampa Bay area, and among its ranks can be found teachers, professors, software developers, students, retirees, engineers, architects, university and government administrators.</p>
        <p>The Sunshine Brass Band is currently seeking talented brass and percussion players wishing to help us grow our ensemble. For more information about auditions, please contact Tim Bailey-Jones at (813) 900-8131.</p>
        <p className="center">The Sunshine Brass Band Inc. is a not for profit corporation.</p>
        <Footer />
      </div>
    );
  }
}

export default Members;