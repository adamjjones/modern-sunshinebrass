import React, { Component } from 'react';
import Footer from './Footer'
import ssblogo from './images/ssblogo2024.jpg'

class HomePage extends Component {
  render() {
    return (
      <>
        <div className="content">
          <h2>WE ARE COMING BACK!  </h2> 
          (October 2024 Update)
          <br/>
          <b>MONDAY, OCTOBER 14 at 7:30pm!</b>
            <br/>
              <small style={{ 'color': 'gray', 'text-decoration': 'line-through'}}>MONDAY, OCTOBER 7 at 7:30pm!
              <br/>
              Yes, we had to cancel because of <a href="https://en.wikipedia.org/wiki/Hurricane_Milton" target="hurricane">Hurricane Milton</a>.
            </small>
          <p>
          Visit the <a href="https://www.facebook.com/groups/45974493119" target="ssb">Sunshine Brass's  
          Facebook page for the latest.</a>
          </p>
          <p>
          Our last rehearsal was in March 2020, the very beginning of the COVID pandemic.
          Aaron Campbell is the driving force behind <a 
          href="https://www.tampabrassband.com/" target="tbb">Tampa Brass Band</a>,
          a much newer British-style Brass Band that has found great success
          at NABBA very early in its history.  There are more local musicians interested 
          in playing this music than the Tampa Brass Band has openings for, so Aaron is trying
          to restart the Sunshine Brass Band to satisfy this demand.  
          </p>
          <p>
            We would love to have you join.  You can register your interest by filling out our <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdzEILvltRBXIQ130AfRK8CFc8VEiWsVCPWZIh7q_3lhFSz9Q/viewform">Interest Form.</a>
          </p>
          <p>
            Rehearsals will resume at <a href="https://tampacovenant.org/" target="tcc">Tampa Covenant Church</a> on 
            Monday evenings, 7:30pm to 9pm, at this address:
            <p style= {{ "margin-left": "3em" }}>
              13320 Lake Magdalene Blvd
              <br/>
              Tampa, FL 33618
            </p>
            <a href="https://maps.app.goo.gl/8JFm7vgvSWd4gQRbA" target="gmaps">Google Maps Link</a>
          </p>
          <p>
            Monday, October 14th!  See you there!
          </p>

      <cite>
          NOTE: British-style brass bands are required 
          to <a href="https://smbrass.com/what-is-a-british-style-brass-band/#:~:text=The%20number%20of%20members%20(instrumentation,marches%2C%20medleys%20and%20hymn%20tune" 
          target="regulations">have between 28 and 30 players.</a>
      </cite>
          
         
          
      


          <h3>About the Band</h3>
          <p>The Sunshine Brass Band was founded in 1983 and is comprised of all volunteer musicians from the Tampa Bay and central Florida areas. Membership in the band is open to anyone in the area who demonstrates the required musical proficiency and eagerness to participate. The Sunshine Brass Band is a true community band, comprised of adult and youth amateur musicians who come from all walks of life. Members are drawn together by their shared love of brass band music and commitment to pursue musical excellence.</p>
          <p>The Band takes seriously its commitment to serve and represent the community through musical excellence. The band can perform in any venue large enough to host a 30 piece group, and often performs at local churches and schools in exchange for donations. The band’s repertoire spans a vast range, from patriotic marches to Broadway show tunes to rock-n-roll and back to traditional symphonic pieces. The band enjoys musical camaraderie with other musical entities and has performed joint concerts with the Salvation Army's Florida Divisional Band, and the Tampa Bay Symphony in addition to our own feature concerts.</p>
          <p>The Band's commitment to musical excellence is fostered most notably through participation in national competitions. In 1984, 1985, and 1986 the Sunshine Brass Band won the Honors Division of the North American Brass Band Association (NABBA) championships. After an eleven-year absence from national contest, the Sunshine Brass Band returned to the NABBA competition in April 1998 and has consistently risen among the ranks of other brass bands to gain top honors in the Challenge Division in 2000 and again in 2002. In 2003 the band recorded and released its debut CD entitled Sunshine & Brass. In 2013 the band recorded and released its second CD, Joy, a Christmas themed work. The band is currently serving at Tampa Covenant Church as artists-in-residence.</p>

          <p>Feel free to explore the top-level menu to learn more about us.</p>

          <h3>Library of Congress</h3>
          <p>If you're not familiar with the British-style Brass Band, here is fine example, but with an American March.</p>

          <div className="video-container">
            <iframe width="840" height="472" title='sunshine-video' src="//www.youtube.com/embed/1PvORDOQTsk" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
          </div>

          <p>The Sunshine Brass Band, Inc. is Artist-in-Residence at Tampa Covenant Church and is a designated 501(c)3 not-for-project organization. Contributions to the band are tax deductible</p>

          <Footer />
        </div>
      </>
    );
  }
}

export default HomePage;
