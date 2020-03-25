import React, { useState } from 'react'
import Footer from './Footer'


const Concerts = () => {
  //   const [events, setEvents] = useState([]);
  //   axios.get(`/api/Event/`)
  //     .then(resp => {
  //       setEvents(resp.data)
  //     })

  return (
    <div className="content center">
      <h3>Coronavirus Update</h3>
      <div>
        Due to the COVID-19 worldwide pandemic,
        Sunshine Brass has no scheduled concerts at this time.
        <p />Be safe, be kind, and wash your hands!
        <p />Please check back as conditions improve.
      </div>
      {/* <h2 className="center">Our Upcoming Concerts</h2>
      <table className="table">
        <thead>
          <tr>
            <td>Event Date</td>
            <td>Event Time</td>
            <td>Event Name</td>
            <td>Event Address</td>
            <td>Event City</td>
            <td>Event State</td>
            <td>Event Zip</td>
            <td>Band URL</td>
            <td>Venue URL</td>
          </tr> */}
      {/* {
            events.map(e => {
              return (
                <tr key={e.id}>
                  <td>{e.date}</td>
                  <td>{e.name}</td>
                  <td>{e.address}</td>
                  <td><a href={e.band_Url}>{e.band_Url}</a></td>
                  <td><a href={e.band_Url}>{e.venue_URL}</a></td>
                </tr>
              )
            })
          } */}
      {/* </thead>
      </table> */}
      <Footer />
    </div >
  )
}

export default Concerts