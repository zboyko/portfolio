import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i className="fas fa-bars" style={{ color: '#fff' }} />
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white text-uppercase ml-5" to="/">
              Home
              <i className="fas fa-home" />
              
              
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to="/about"
            >
              about
              <i className="fas fa-info-circle" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to="/contact"
            >
              contact 
              
              <i className="fas fa-envelope" />
            </Link>
          </li>
        </ul>
       
      </div>
    </nav>
  );
}

export default Navbar;