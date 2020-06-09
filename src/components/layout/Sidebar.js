import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Fragment>
      <input type="checkbox" id="check" />
      <div className="sidebar">
        <center>
          <img
            src="https://i.ibb.co/RCkT8Fx/ks.jpg"
            className="profile_image"
            alt=""
          />
          <h4>Kaushal</h4>
        </center>
        <Link className="link" to="#">
          <i className="fas fa-user-circle"></i>
          <span>Users</span>
        </Link>
        <Link className="link" to="/pending">
          <i className="fas fa-desktop"></i>
          <span>Dashboard</span>
        </Link>
        <Link className="link" to="/program">
          <i className="fas fa-calendar-check"></i>
          <span>Our Program</span>
        </Link>
        <Link className="link" to="/hackthons">
          <i className="fas fa-th"></i>
          <span>Hackathons</span>
        </Link>
        <Link className="link" to="/impact">
          <i className="fas fa-info-circle"></i>
          <span>Our Impact</span>
        </Link>
        <Link className="link" to="/settings">
          <i className="fas fa-sliders-h"></i>
          <span>Settings</span>
        </Link>
      </div>
    </Fragment>
  );
};

export default Sidebar;
