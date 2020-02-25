import React, { Component } from 'react';
import axios from 'axios';

const submitEvent = (props) => {
  axios.post('/api/Event', {
    Id: 3,
    Date: 'something',
    Name: 'something else',
    Address: '11305 Linbanks',
    BandURL: 'google.com',
    VenueURL: 'linuxtampa.com'
  })

  console.log(props)
}

const DeleteEvent = (props) => {
  axios.delete('/api/Event', {
  })
}

const AdminAddEvent = () => {
  return (
    <div className="content">
      <span>Date<input type="text" /></span>
      <span>Name<input type="text" /></span>
      <span>Address<input type="text" /></span>
      <span>Band URL<input type="text" /></span>
      <span>Venue URL<input type="text" /></span>
      <input type="submit" onClick={submitEvent} />
    </div>
  );
}

export default AdminAddEvent;