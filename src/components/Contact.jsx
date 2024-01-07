import { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    const [formState, setFormState] = useState({
        email: '',
        name: '',
        message: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const {email, name, message} = formState;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errorMessage){
            console.log('Submit Contact Form', formState);
        }
    };
    const handleChange = (event) => {
        if(event.target.name==='email'){
            const isValid = validateEmail(event.target.value);
            if(!isValid){
                setErrorMessage('Your email address is invalid.')
            } else {
                setErrorMessage('');
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required.`)
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
              value={input}
              name="email"
              defaultValue={email}
              className="contact-input"
              onChange={handleChange} // check
            ></input>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Enter your name:"
              value={input}
              name="name"
              defaultValue={name}
              className="contact-input"
              onChange={handleChange} // check
            ></input>
            <label htmlFor="message">Name:</label>
             <input
              type="text"
              placeholder="Enter your message: (must be 1-500 characters long)"
              value={input}
              name="message"
              defaultValue={message}
              className="contact-input"
              onChange={handleChange} // check
            ></input>
        </div>
            <button className="contact-button">Submit form</button>
          </form>
          <div>
            <ul className = "contact-list">
                <li>malloryklR@gmail.com</li>
                <li>561-926-xxxx</li>
                <li><a href="https://www.linkedin.com/in/malloryklar">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      )
  }