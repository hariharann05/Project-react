// src/App.js
import React from 'react';
import ContactForm from './ContactForm'; // Import the ContactForm component
import OurStory from './OurStory';
import OurService from './OurService';
import Casestudies from './Casestudies';

function App() {
  return (
    <div>
        <OurStory />
      {/* {<h1>Contact Form App</h1>} */}
      <OurService />
      <Casestudies />
      <ContactForm />
    
    </div>
  );
}

export default App;
