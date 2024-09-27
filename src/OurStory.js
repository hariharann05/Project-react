import React from 'react';
import './App.css';

const OurStory = () => {
    return (
        <div className="whole-div">
            <div className="overlay"></div>
            <div className="content">
                <nav className="navbar">
                    <div>
                        <h2>Brainwave.io</h2>
                    </div>
                    <div className="navbar-0">
                        <button className="navbar-2">Demos</button>
                        <button className="navbar-2">Pages</button>
                        <button className="navbar-2">Support</button>
                        <button className="navbar-2">Contact</button>
                        <button className="navbar-3">Get started a project</button>
                    </div>
                </nav>
                <div className='display'>
                    <div className='display-0'>
                        <h5>LETS SHIFT YOUR BUSINESS</h5>
                    </div>
                    <div>
                        <h3>Shift your business fast with Shade Pro</h3>
                        <p>
                            With Lots of Unique blocks, you can easily build a page without coding. Build your next consultancy website within a few minutes.
                        </p>
                        {/* <img src="img4.jpg" alt="Business Shift" className="story-image" /> */}
                    </div>
                    <button className="navbar-3">Get started a project</button>
                </div>
            </div>
        </div>
    );
};

export default OurStory;
