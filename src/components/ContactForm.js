// ContactForm.js

import React, { useState } from 'react';
import "./ContactForm.css";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, such as sending data to a server or performing other actions.
    console.log(formData);
    // Reset form fields after submission (optional)
    setFormData({
      name: '',
      phoneNumber: '',
      email: '',
      message: '',
    });
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div><div>
        <label className='label' htmlFor="name">Name       :         </label>
        <input  
          className='input' 
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className='label'  htmlFor="phoneNumber">Phone Number          :</label>
        <input
         className='input' 
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label  className='label' htmlFor="email">Email            :</label>
        <input
         className='input' 
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label  className='label' htmlFor="message">Message              :</label>
        <textarea
         className='input' 
         
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div></div>
      <div className='contact-button'>   <button type="submit">Submit</button></div>
   
    </form>
  );
};

export default ContactForm;
