// src/ContactForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    emailId: '',
    age: '',
    gender: '',
    mobilenumber: '',
    pan_no: '',
    adhaar_no: '',
    status: true,
  });

  const [contacts, setContacts] = useState([]);
  const [editId, setEditId] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // POST: Create new contact
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      // If editId exists, update the contact
      await axios.put(`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${editId}`, formData);
    } else {
      // Create new contact
      await axios.post('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile', formData);
    }
    fetchContacts(); // Refresh the contact list
    setEditId(null);
    setFormData({ // Reset form
      first_name: '',
      last_name: '',
      emailId: '',
      age: '',
      gender: '',
      mobilenumber: '',
      pan_no: '',
      adhaar_no: '',
      status: true,
    });
  };

  // GET: Fetch contacts
  const fetchContacts = async () => {
    const response = await axios.get('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile');
    setContacts(response.data);
  };

  // PUT: Edit existing contact
  const handleEdit = (contact) => {
    setEditId(contact.id);
    setFormData(contact);
  };

  // DELETE: Delete contact
  const handleDelete = async (id) => {
    await axios.delete(`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${id}`);
    fetchContacts(); // Refresh the contact list
  };

  useEffect(() => {
    fetchContacts(); // Fetch contacts on component mount
  }, []);

  return (
    <div className="contact-form">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" required />
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" required />
        <input type="email" name="emailId" value={formData.emailId} onChange={handleChange} placeholder="Email" required />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="text" name="mobilenumber" value={formData.mobilenumber} onChange={handleChange} placeholder="Mobile Number" required />
        <input type="text" name="pan_no" value={formData.pan_no} onChange={handleChange} placeholder="PAN No" required />
        <input type="text" name="adhaar_no" value={formData.adhaar_no} onChange={handleChange} placeholder="Aadhaar No" required />
        <button type="submit">{editId ? 'Update' : 'Create'}</button>
      </form>
  
      <h2>Contact List</h2>
      <ul className="contact-list">
  {contacts.map((contact) => (
    <li key={contact.id}>
      <div className="contact-info">
        {contact.first_name} {contact.last_name} ({contact.emailId})
      </div>
      <div className="contact-actions">
        <button onClick={() => handleEdit(contact)}>Edit</button>
        <button onClick={() => handleDelete(contact.id)}>Delete</button>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
  
};

export default ContactForm;
