import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar bg-dark">
        <Link to="/">
          <img
            className="logo"
            src="https://i.ibb.co/VvHpdWk/download.png"
            alt=""
          />
        </Link>
        <label htmlFor="check">
          <i className="fas fa-bars" id="sidebar_btn"></i>
        </label>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="posts.html">Create</Link>
          </li>
        </ul>
        <div>
          <button className="logout">
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
