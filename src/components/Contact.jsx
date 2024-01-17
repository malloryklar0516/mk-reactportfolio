import { useState } from 'react';

import { validateEmail } from '../utils/helpers';

export default function Contact() {
    const [formState, setFormState] = useState({
        email: '',
        name:'',
        message:''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const {email, name, message} = formState;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errorMessage){
            console.log('Submit contact form', formState);
        }
    };
    const handleChange = (event) => {
        if(event.target.name==='email'){
            const isValid = validateEmail(event.target.value);
            if(!isValid){
                setErrorMessage('Email address is invalid.')
            } else {
                setErrorMessage('');
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is a required field.`)
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage){
            setFormState({...formState, [event.target.name]: event.target.value});
            console.log('Handle Form', formState);
        }
    }

    return  ( // check
        <div>
        <h2>Please reach out to me using the form below. I always respond in a timely manner. </h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              name="email"
              className="contact-input"
              onChange={handleChange} // check
            ></input>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Enter your name:"
              value={name}
              name="name"
            
              className="contact-input"
              onChange={handleChange} // check
            ></input>
            <label htmlFor="message">Name:</label>
             <input
              type="text"
              placeholder="Enter your message: (must be 1-500 characters long)"
              value={message}
              name="message"
              className="contact-input"
              onChange={handleChange} // check
            ></input>
        </div>
            <button type="submit" className="contact-button">Submit form</button>
          </form>
          <div>
            <ul className = "contact-list">
                <li>malloryklar@gmail.com</li>
                <li>561-926-xxxx</li>
                <li><a href="https://www.linkedin.com/in/malloryklar">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      )
  } 