import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <header>
        <label for="check">
          <i className="fas fa-bars" id="sidebar_btn"></i>
        </label>
        <div className="left_area">
          <h3>
            internity <span>foundation</span>
          </h3>
        </div>
        <div className="right_area">
          <Link to="#" className="logout_btn">
            Logout
          </Link>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
