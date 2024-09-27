import React, { useState } from 'react';
import userPhoto1 from './5.png';
import userPhoto2 from './6.png';
import userPhoto3 from './7.png';
import userPhoto4 from './8.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter,faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import userPhoto from './9.png';
import './App.css'

const images = [
  { src: userPhoto1, title: "Gradient Website", description: "Web Development" },
  { src: userPhoto2, title: "Magazine Content Writing", description: "Content Writing" },
  { src: userPhoto3, title: "Aura Branding Design", description: "Graphic Design" },
  { src: userPhoto4, title: "AB.S Snack Packaging", description: "Graphic Design" },
];

function Casestudies() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='case-studies'>
      <div className='case-studies-0'>
        <h5>CASE STUDIES</h5>
        <strong>Our works describes why we are the best in the business</strong>
      </div>
      <div className='case-photos'>
        {images.map((image, index) => (
          <div className='photos' key={index} onClick={() => handleImageClick(image)}>
            <img src={image.src} alt={image.description} className='user-phot0' />
            <p>{image.description}</p>
            <h5>{image.title}</h5>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className='modal' onClick={handleCloseModal}>
          <div className='modal-content'>
            <span className='close' onClick={handleCloseModal}>&times;</span>
            <img src={selectedImage.src} alt={selectedImage.description} className='modal-image' />
            <h5>{selectedImage.title}</h5>
          </div>
        </div>
      )}
      <div className='works'>
      <h4>
        See all works <FontAwesomeIcon icon={faArrowRight} className='choose-icon2' />
      </h4>
    </div>
    <div className= 'quotes'>
        <div className='quotes-0'>
            <h5>TESTIMONIAL</h5>
            <h2>"Simply the best. Better than all the rest. I'd  recommend this product to beginners and advanced users."</h2>
            <div className='testimonial-3'>
            <img src={userPhoto} alt="User" className='user-photo-0' /></div>
            <strong>Professional</strong>
            <p>Digital Marketer</p>
        </div>
    </div>
    <div className="container">
    <header className="header">
    <h1>Brainwave.io</h1>
    <nav className="navbarr">
      <ul>
        <li>Company</li>
        <li>Product</li>
        <li>Services</li>
        <li>About us</li>
        <li>Features</li>
        <li>Contact us</li>
        <li>Pricing</li>
        <li>Careers</li>
        <li>News</li>
      </ul>
    </nav>
  </header>

  <main className="main-content">
    <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
  </main>

  <footer className="footer">
    <div className="footer-section">
      <h5>Services</h5>
      <ul>
        <li>Digital Marketing</li>
        <li>Content Writing</li>
        <li>SEO for Business</li>
      </ul>
    </div>
    <div className="footer-section">
      <h5>Legal</h5>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>Return Policy</li>
      </ul>
    </div>
    <div className="footer-section">
      <h5>Press</h5>
      <ul>
        <li>Help desk</li>
        <li>UI Design</li>
        <li>Support</li>
      </ul>
    </div>
  </footer>
</div>
<div className="icons1">
  <FontAwesomeIcon icon={faTwitter} className="icon-1" />
  <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
  <FontAwesomeIcon icon={faInstagram} className="icon" />
  <FontAwesomeIcon icon={faLinkedin} className="icon" />
</div>



    </div>
  );
}

export default Casestudies;
