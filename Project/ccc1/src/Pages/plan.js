import React from 'react';
import Navbar from "./Nav";
import "../Assets/Css/plans.css"
const Pla = () => {
  return (
      <div>
        <div className="container">
          <div className="header">
            <div className="arrow">
              <i data-feather="arrow-left"></i>
            </div>
  
            <div className="headerRight">
              <i data-feather="search"></i>
            </div>
            <div></div>
            <div></div>
          </div>
  
          <div className="bigColumns">
            <div className="column1">
              <div className="mainBox">
                <div className="mainBoxHeader">
                  <div>
                    <p>Trip to</p>
                    <h1>East Switzerland</h1>
                  </div>
                  <div className="mainBoxHeaderRight">
                    <div>15 days</div>
                    <div className="price">£ 4050</div>
                  </div>
                </div>
  
                <div className="mainBoxWeather">
                  <h1>
                    8<span className="degree">°c</span>
                  </h1>
                  <p>
                    <i data-feather="sun"></i>Sunrise
                  </p>
                </div>
                <p className="mainBoxSmall">
                  <i data-feather="droplet"></i>Humidity : 98%
                </p>
                <p className="mainBoxSmall">
                  <i data-feather="wind"></i>Wind : 85 km/h
                </p>
              </div>
  
          
  <h2></h2>
              <div className="boxInfos">
                <h3>Package Details</h3>
                <div className="rating">
                  <div>Rated:4.5/5</div>
                  <div className="ratingStars">
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                  </div>
                </div>
                <h3>Opens EveryDay: 6AM</h3>
                <p>Ages 8-72</p>
                <h6></h6>
                <p>Duration: 20 days</p>
                <h6></h6>
                <p>Start time: Early Morning</p>
                <h6></h6>
                <p>Live guide: English</p>
                <h6></h6>
                <p>Mobile Ticket(*Permitted)</p>
                <h6></h6>
              </div>
  
            </div>
  
            <div className="column2">
              <div className="travel reyk">
              
                <div className="price">£ 680</div>
                <p>2 days</p>
                <h1>Zermatt-For The Best Skiing</h1>
               
              </div>
  
              <div className="travel phnom">
                <div className ="price">£ 1370</div>
                <p>10 days</p>
               
                <h1>Mt.Pilatus-For Adventure</h1>
              </div>
  
              <div className="travel well">
                
                <div className="price">£ 2900</div>
                <p>5 days</p>
                <h1>Lucerne-Picture Perfect Views</h1>
              </div>
  
              <div className="travel syd">
             
                <div className="price">£ 1800</div>
                <p>3 days</p>
                <h1>Davos-Highest Town in the Apls</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Pla;
