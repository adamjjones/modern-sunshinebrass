import React, { Component } from 'react';
class Rehearsals extends Component {
  render() {
    return (
      <div className="content">
        <p>The Sunshine Brass Band is always seeking talented brass and percussion players wishing to help us grow our ensemble.</p>
        <p>If you are interested in joining, please call or email Tim Bailey-Jones Jones at 813-900-8131 to confirm our next rehearsal time and date. Normally, rehearsals are every Monday evening from 7pm to 9pm, excluding major holidays that fall on Monday, and on occasion it is canceled to due to other reasons.</p>
        <p>The rehearsal location is:</p>

        <p>Tampa Covenant Church</p>
        13320 Lake Magdalene Blvd.
        Tampa, FL 33618
        <div className="video-container">
          <iframe title='maps' className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7042.243535005939!2d-82.3730535!3d28.051306399999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c0c0c217af71%3A0x5a88c97ff38a7ad2!2sTampa%20Covenant%20Church!5e0!3m2!1sen!2sus!4v1581458730917!5m2!1sen!2sus" width="600" height="450" frameBorder="0" allowFullScreen=""></iframe>
        </div>
      </div >
    );
  }
}

export default Rehearsals;