import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';


const AdminAddEvent = (props) => {
  const [dates, setDates] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [bandURL, setBandURL] = useState('')
  const [venueURL, setVenueURL] = useState('')
  console.log("AdminAddEvent.props", props);

  const submitEvent = (event) => {
    setDates(event.target.value)
    setName(event.target.value)
    setAddress(event.target.value)
    setBandURL(event.target.value)
    setVenueURL(event.target.value)
    axios.get('/api/Event', {
      Date: dates,
      Name: name,
      Address: address,
      BandURL: bandURL,
      VenueURL: venueURL
    })
    console.log(setDates, setName, setAddress, setBandURL, setVenueURL)
    // console.log('eventData', eventData)
  }

  return (
    <div className="content">

      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            // errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
            <form onSubmit={handleSubmit}>
              <span className="add-event">
                Date
            <input
                  type="date"
                  name="date"
                  // onMouseOut={submitEvent}
                  onBlur={handleBlur}
                  value={values.date}
                />
              </span>
              <span className="add-event">
                Event Name
            <input
                  // onMouseOut={submitEvent}
                  type="text"
                  name="name"
                />
              </span>
              <span className="add-event">
                Address
            <input
                  // onMouseOut={submitEvent}
                  type="text"
                  name="name"
                />
              </span>
              <span className="add-event">
                Band URL
            <input
                  // onMouseOut={submitEvent}
                  type="text"
                  name="name"
                />
              </span>
              <span className="add-event">
                Venue URL
            <input
                  // onMouseOut={submitEvent}
                  type="text"
                  name="name"
                />
              </span>
              {errors.email && touched.email && errors.email}
              {/* <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            /> */}
              {errors.password && touched.password && errors.password}
              <button type="submit" onClick={submitEvent} disabled={isSubmitting}>
                Submit
        </button>
            </form>
          )}
      </Formik>
    </div>
  );
}


const DeleteEvent = (props) => {
  axios.delete('/api/Event', {
  })
}


export default AdminAddEvent;