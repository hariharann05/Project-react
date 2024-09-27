import React from 'react';
import './App.css'
import starImage from './5stars-removebg-preview.png';
import userPhoto from './Male face.jpeg';
import starImage1 from './2.webp';
import userPhoto1 from './3.jpg';
import starImage2 from './4.jpg';
import userPhoto2 from './1.jpeg';
import userPhoto3 from './Green.png';
import userPhoto4 from './Web.png';
import userPhoto5 from './Content.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTasks, faComments, faClock } from '@fortawesome/free-solid-svg-icons';
// import { faUser } from '@fortawesome/free-solid-svg-icons';


function OurService() {
  return (
    <div className='services'>
      <div className='service-0'>
        <h5>OUR SERVICES</h5>
      </div>
      <div className='service-1'>
        <strong>We provide great services for our customers based on needs</strong>
      </div>
      <div className='service-boxes'>
        <div className='service-box'>
        <img src={userPhoto3} alt="User 1" className='user-photo' />
          <h3>Graphic Design</h3>
          <p>Create stunning visuals and graphics that communicate your brand message effectively.</p>
          <button className='learn-more'>Learn More</button>
        </div>
        <div className='service-box'>
        <img src={userPhoto4} alt="User 1" className='user-photo' />
          <h3>Web Development</h3>
          <p>Build responsive and user-friendly websites that enhance your online presence.</p>
          <button className='learn-more'>Learn More</button>
        </div>
        <div className='service-box'>
        <img src={userPhoto5} alt="User 1" className='user-photo' />
          <h3>Content Writing</h3>
          <p>Engage your audience with high-quality content tailored to your brand's voice.</p>
          <button className='learn-more'>Learn More</button>
        </div>
      </div>
      <div className='testimonial'>
  <img src={userPhoto} alt="User" className='user-photo' />
  <div className='testimonial-content'>
    <h4>What Our Clients Say</h4>
    <img src={starImage} alt="5 Stars" className='star-rating' />
    <p>"The services provided were outstanding! Our project was delivered on time and exceeded our expectations."</p>
    <p><strong>- Happy Client</strong></p>
  </div>
</div>
<div className='story'>
  <div className='story-0'>
    <h5>OUR STORIES</h5>
  </div>
  <div className='story-1'>
    <h1>We know how everything works and why your business is falling over and over again.</h1>
  </div>
  <div className='story-3'>
    <div className='testimo'>
      <img src={userPhoto1} alt="User 1" className='user-photo' />
      <div className='testimonial-content'>
        <img src={starImage1} alt="5 Stars" className='star-rating' />
        <p>We share common trends and strategies for improving your rental income and making sure you stay in high demand. With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
        <p><strong>- Happy Client 1</strong></p>
      </div>
    </div>
    <div className='testimo'>
      <img src={userPhoto2} alt="User 2" className='user-photo' />
      <div className='testimonial-content'>
        <img src={starImage2} alt="5 Stars" className='star-rating' />
        <p>Using their services has significantly increased my business visibility. Highly recommended!</p>
        <p><strong>- Happy Client 2</strong></p>
      </div>
    </div>
  </div>
  <div className='customers'>
    <div className='customers-0'>
      <h2>1M+</h2>
      <p>Customers visit omega every month to get their service done.</p>
    </div>
    <div className='customers-1'>
      <h2>92%</h2>
      <p>Satisfaction rate comes from our awesome customers.</p>
    </div>
    <div className='customers-2'>
      <h2>4.9/5.0</h2>
      <p>Average customer ratings we have got all over the internet.</p>
    </div>
  </div>
</div>
<div className='choose'>
  <div className='choose-header'>
    <h5>WHY CHOOSE US</h5>
    <strong>People choose us because we serve the best for everyone</strong>  
  </div>
  <div className='choose-items'>
    <div className='choose-item'>
      <FontAwesomeIcon icon={faUser} className='choose-icon1' />
      <h4>Dedicated Project Manager</h4>
      <p>With lots of unique books, you can easily build a page without coding. Build your next landing page.</p>
    </div>
    <div className='choose-item'>
      <FontAwesomeIcon icon={faTasks} className='choose-icon2' />
      <h4>Organized Tasks</h4>
      <p>We prioritize your tasks, ensuring that every detail is meticulously planned and executed.</p>
    </div>
    <div className='choose-item'>
      <FontAwesomeIcon icon={faComments} className='choose-icon3' />
      <h4>Easy Feedback Sharing</h4>
      <p>Our platform allows for seamless feedback sharing, making collaboration effortless.</p>
    </div>
    <div className='choose-item'>
      <FontAwesomeIcon icon={faClock} className='choose-icon4' />
      <h4>Never Miss a Deadline</h4>
      <p>Our commitment to deadlines means you can trust us to deliver on time, every time.</p>
    </div>
  </div>
</div>


</div>
  );
}

export default OurService;
