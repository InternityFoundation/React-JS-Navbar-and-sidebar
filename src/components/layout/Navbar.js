import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar bg-dark ind">
        <h1>
          <Link to="/">
            <img
              className="logo"
              src="https://i.ibb.co/VvHpdWk/download.png"
              alt="theCodemate"
            />
          </Link>
        </h1>
        <label htmlFor="check">
          <i className="fas fa-bars" id="nav_btn"></i>
        </label>
        <ul>
          <li>
            <Link to="profiles.html">Home</Link>
          </li>
          <li>
            <Link to="register.html">Create</Link>
          </li>
        </ul>
        <button className="logout_btn">
          <i className="fas fa-sign-out-alt"></i>{' '}
          <span className="hide-sm">Logout</span>
        </button>
      </nav>
    </Fragment>
  );
};

export default Navbar;
