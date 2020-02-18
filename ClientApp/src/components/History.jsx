import React, { Component } from 'react'
import { Link } from "react-router-dom"

class History extends Component {
  render() {
    return (
      <div className="content">
        <p className="bold">Early 1980s</p>

        <p>
          Don and Karen Kneeburg provided the guiding force
          for the band from the very beginning in 1983 until their retirements in 1995.
          The Kneeburgs created a band that to this day strives for musical excellence.
        </p>

        <p className="bold">Mid 1980s</p>
        <p>
          The Brass Band world revolves around a particular national
          competition called the <a href="http://www.nabba.org/">North American Brass
          Band Association</a> (NABBA).  Each year, hundreds of the continent's
          finest brass talent congregates in a different city to compete, listen
          and learn from each other.
        </p>

        <p>The Sunshine Brass Band competed in the
           NABBA competition in its early years winning the Honors division
           contest in 1984, 1985, and 1986.</p>
        <p>
          In fact, current day NABBA rules
          that require bands that win their division for three consecutive
          years to move to the next division (or sit out a year if in the
          Championship division) were instituted because of the success of the
          Sunshine Brass Band at contest during this time.
        </p>

        <p className="bold">Late 1990s</p>

        <p>
          The band was directed by Paul Gansemer from 1995 to 1999.
          Under his leadership, the band renewed its
          commitment to participation in NABBA contests by returning to the
          competition stage in 1998 after an eleven-year hiatus.
        </p>

        <p>The New Millenium (1999 to 2019)</p><br />
        <p>Director James F. Cheyne led the band for a full twenty years from 1999 to 2019.</p>

        The Sunshine Brass Band continued its winning ways, taking first place
        in the 2000 and 2002 Challenge division NABBA contests.

        <p>
          The band took 2003 off from the competition to record it's first
          <Link to='/BrassBand'> Compact Disk</Link>.
        </p>

        <p>
          In 2004, the Sunshine Brass returned to NABBA,
          upping the ante by moving from Challenge Section to Honors, and scoring
          second in Honors for the first time since 1986 (18 years!).
        </p>
        <p>
          We continued competing in NABBA up until 2010.
          That year, we recorded <Link to='/Christmas'>JOY!</Link>.
          From that album, we also produced
          <Link to='/Videos'> a music video of Jim's fabulous arrangement of "O Holy Night"</Link>,
          from featuring the band, and his lovely wife, Deanna Cheyne.
          JOY contains other stunning examples of Deanna's voice!
        </p>

        <p>
          We continue to play many concerts each year. and we
          also are the first to play original compositions and
          arrangements by our director of twenty years, James Cheyne.
        </p>

        <p>
          Some of this music includes a choir, and some of it also features
          the outstanding soprano Deanna Cheyne
        </p>
      </div>
    );
  }
}

export default History;