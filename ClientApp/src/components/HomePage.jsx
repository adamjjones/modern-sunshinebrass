import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <>
        <div className="content">
          {/* <h3>Holiday Break</h3>
        <p>The Sunshine Brass Band resumes rehearsals on Monday, January 6th at 7 pm at Tampa Covenant Church. We are seeking brass and percussion players to help us grow. For more information, please contact Tim Bailey-Jones or 813-900-8131.</p>
        <p>Check out our Concert Schedule and come to one of our performances.</p> */}

          <h3>About the Band</h3>
          <p>The Sunshine Brass Band was founded in 1983 and is comprised of all volunteer musicians from the Tampa Bay and central Florida areas. Membership in the band is open to anyone in the area who demonstrates the required musical proficiency and eagerness to participate. The Sunshine Brass Band is a true community band, comprised of adult and youth amateur musicians who come from all walks of life. Members are drawn together by their shared love of brass band music and commitment to pursue musical excellence.</p>
          <p>The Band takes seriously its commitment to serve and represent the community through musical excellence. The band can perform in any venue large enough to host a 30 piece group, and often performs at local churches and schools in exchange for donations. The band’s repertoire spans a vast range, from patriotic marches to Broadway show tunes to rock-n-roll and back to traditional symphonic pieces. The band enjoys musical camaraderie with other musical entities and has performed joint concerts with the Salvation Army's Florida Divisional Band, and the Tampa Bay Symphony in addition to our own feature concerts.</p>
          <p>The Band's commitment to musical excellence is fostered most notably through participation in national competitions. In 1984, 1985, and 1986 the Sunshine Brass Band won the Honors Division of the North American Brass Band Association (NABBA) championships. After an eleven-year absence from national contest, the Sunshine Brass Band returned to the NABBA competition in April 1998 and has consistently risen among the ranks of other brass bands to gain top honors in the Challenge Division in 2000 and again in 2002. In 2003 the band recorded and released its debut CD entitled Sunshine & Brass. In 2013 the band recorded and released its second CD, Joy, a Christmas themed work. The band is currently serving at Tampa Covenant Church as artists-in-residence.</p>

          <p>Feel free to explore the top-level menu to learn more about us.</p>

          <h3>Library of Congress</h3>
          <p>If you're not familiar with the British-style Brass Band, here is fine example, but with an American March.</p>

          <div className="video-container">
            <iframe width="840" height="472" src="//www.youtube.com/embed/1PvORDOQTsk" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
          </div>

          <p>The Sunshine Brass Band, Inc. is Artist-in-Residence at Tampa Covenant Church and is a designated 501(c)3 not-for-project organization. Contributions to the band are tax deductible</p>

        </div>
      </>
    );
  }
}

export default HomePage;