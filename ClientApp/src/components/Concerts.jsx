import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Concerts = () => {
  const [events, setEvents] = useState([]);
  axios.get(`/api/Event/`)
    .then(resp => {
      setEvents(resp.data)
    })

  return (
    <div>
      <h2 className="center">Our Upcoming Concerts</h2>
      <table className="table">
        <thead>
          <tr>
            <td>Date</td>
            <td>Name</td>
            <td>Address</td>
            <td>Band URL</td>
            <td>Venue URL</td>
          </tr>
          {
            events.map(e => {
              return (
                <tr key={e.id}>
                  <td>{e.date}</td>
                  <td>{e.name}</td>
                  <td>{e.address}</td>
                  <td><a href={"https://" + e.band_Url}>{e.band_Url}</a></td>
                  <td><a href={"https://" + e.band_Url}>{e.venue_URL}</a></td>
                </tr>
              )
            })
          }
        </thead>
      </table>
    </div>
  )
}

export default Concerts