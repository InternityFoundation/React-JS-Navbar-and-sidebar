import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Fragment>
      <input type="checkbox" id="check" />
      <div className="sidebar">
        <center>
          <Link to="/pending">
            <img
              src="https://i.ibb.co/RCkT8Fx/ks.jpg"
              className="profile_image"
              alt=""
            />
            <h4>Kaushal</h4>
          </Link>
        </center>
        <Link className="link" to="#">
          <i className="fas fa-user-circle"></i>
          <span>Users</span>
        </Link>
        <Link className="link" to="/pending">
          <i className="fas fa-list"></i>
          <span>Dashboard</span>
        </Link>
      </div>
    </Fragment>
  );
};

export default Sidebar;
