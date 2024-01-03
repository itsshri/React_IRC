import React from 'react';
import '../Styles/About.css';
import Footer from './Footer';
import Navbar from './Navbar';
 
const About = () => {
  return (
    <>
    <Navbar/>
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container bottomContainer">
        <div className="allText bottomText">
          <p className="text-blk headingText">
            About
          </p>
          <p className="text-blk subHeadingText">
            Visit Swiss
          </p>
          <p className="text-blk description">
          Our tourism page is your passport to an unforgettable Swiss adventure, providing a curated guide to the country's wonders, activities, and hidden gems that make Switzerland a truly timeless destination. Join us on a virtual journey through Switzerland's scenic wonders and start planning your next unforgettable escape.
          </p>
          <a href="#">
            <button className="explore">
              Thank You for Visiting our Page!❤️
            </button>
          </a>
        </div>
        <div className="videoContainer">
           {/* <video width="2048" height="1365"  className="video-background" autoPlay loop muted>
          <source src={Swiss} type="video/mp4" />
        </video> */}
          <iframe title="Main Video" allowFullScreen className="mainVideo" controls="controls" src="https://www.youtube.com/embed/svg%3E?" />
          <img className="dotsImg image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg" alt="Dots Image" />
        </div>
      </div>
    </div>
        </>
  );
};

export default About;
