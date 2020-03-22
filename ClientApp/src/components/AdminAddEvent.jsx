import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';


const AdminAddEvent = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const initialValues = {
    band_id: 'sunshinebrass.com',
    date: '',
    time: '',
    event_name: '',
    address: '',
    city: '',
    state: 'FL',
    zip: '',
    band_url: 'https://sunshinebrass.com/Concerts',
    venue_url: '',
    notes: ''
  }

  const submitEvent = (values, options) => {
    const { setSubmitting } = options;
    setSubmitting(true)
    setErrorMessage('')

    fetch('/api/Event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    }).then(async response => {
      const data = await response.json();
      console.log('response', response)
      setSubmitting(false)
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        setErrorMessage(error)
        return Promise.reject(error);
      }
      setErrorMessage("Successfully Added Event!")
      setTimeout(() => { setErrorMessage("") }, 5000)
    }).catch(error => {
      // this.setState({ errorMessage: error });
      console.error('There was an error!', error);
    });
  }

  return (
    <div className="content">
      <div className="errorMessage">{errorMessage}</div>

      <Formik
        initialValues={initialValues}
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
        onSubmit={(values, options) => {
          submitEvent(values, options)
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
            // <form onSubmit={handleSubmit}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="date" className="add-event">Event Date</label>
              <input name="date"
                type="date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date}
              />

              {errors.date && touched.date && errors.date}
              <label htmlFor="time" className="add-event">Event Time</label>
              <input name="time"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.time}
              />
              {errors.time && touched.time && errors.time}

              <label htmlFor="event_name" className="add-event"> Event Name</label>
              <input
                type="text"
                name="event_name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.event_name}
              />
              {errors.event_name && touched.event_name && errors.event_name}

              <label htmlFor="address" className="add-event"> Event Address</label>
              <input
                type="text"
                name="address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
              />
              {errors.address && touched.address && errors.address}

              <label htmlFor="city" className="add-event"> Event City</label>
              <input
                type="text"
                name="city"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.city}
              />
              {errors.city && touched.city && errors.city}

              <label htmlFor="state" className="add-event"> Event State</label>
              <input
                type="text"
                name="state"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.state}
              />
              {errors.state && touched.state && errors.state}

              <label htmlFor="zip" className="add-event"> Event Zip</label>
              <input
                type="text"
                name="zip"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.zip}
              />
              {errors.zip && touched.zip && errors.zip}

              <label htmlFor="band_url" className="add-event"> Band URL </label>
              <input
                type="text"
                name="band_url"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.band_url}
              />
              {errors.band_url && touched.band_url && errors.band_url}

              <label htmlFor="venue_url" className="add-event">Venue URL</label>
              <input
                type="text"
                name="venue_url"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.venue_url}
              />
              {errors.venue_url && touched.venue_url && errors.venue_url}

              <label htmlFor="notes" className="add-event">Notes</label>
              <textarea name='notes' onBlur={handleBlur} onChange={handleChange} value={values.notes} />
              <button type="submit" disabled={isSubmitting}> Submit </button>
            </form>
          )}
      </Formik>
    </div >
  );
}

export default AdminAddEvent;