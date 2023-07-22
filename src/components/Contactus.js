import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a data object with the form values
    const data = {
      name: name,
      email: email,
      message: message
    };

    
    axios.post('http://127.0.0.1:8000/api/index-contact', data)
      .then(response => {
        console.log(response.data);
        setSubmissionStatus('Form submitted successfully');
      })
      .catch(error => {
        console.error(error);
        setSubmissionStatus('An error occurred');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-container'>
        <label className='form-label' htmlFor="name">Name:</label>
        <input
          className='form-input'
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </div>
      <div className='form-container'>
        <label className='form-label' htmlFor="email">Email:</label>
        <input
          className='form-input'
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </div>
      <div className='form-container'>
        <label className='form-label' htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={event => setMessage(event.target.value)}
        ></textarea>
      </div>
      <div className='form-container'>
        <button className='form-submit' type="submit">Submit</button>
      </div>
      {submissionStatus && <p>{submissionStatus}</p>}
    </form>
  );
};

export default Contact;
