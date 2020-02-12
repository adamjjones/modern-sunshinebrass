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
      {
        events.map(e => {
          return <div>{e.name}</div>
        })
      }
    </div>
  )
}

export default Concerts