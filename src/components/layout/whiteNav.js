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
          <h2 className="text-span">
            INTERNITY <span>FOUNDATION</span>
          </h2>
        </Link>
        <label for="check">
          <i className="fas fa-bars" id="sidebar_btn"></i>
        </label>
        <ul>
          <li>
            <a href="profiles.html">Create</a>
          </li>
          <li>
            <a href="posts.html">Blogs</a>
          </li>
          <li>
            <a href="dashboard.html" title="Dashboard">
              <span className="hide-sm">Users</span>
            </a>
          </li>
          <li>
            <a href="login.html" title="Logout">
              <i className="fas fa-sign-out-alt"></i>
              <span className="hide-sm">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
