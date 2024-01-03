import React from 'react';
import '../Styles/Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='al'>
      <ul>
        <Link to="/dashboard">
        <li><a href="#">Dashboard</a></li>
        </Link>
        
        <Link to="/about">
        <li>About</li>
        </Link>

        <Link to="/home">
        <li><a href="#">Home</a></li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
