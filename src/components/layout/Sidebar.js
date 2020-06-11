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
        <Link class="link" data-toggle="dropdown">
          <i className="fas fa-user-circle"></i>
          <span>Users</span>
        </Link>
        <div class="dropdown-menu customClassForDropDown">
          <Link to="/" className="users">
            <img src="https://i.ibb.co/RCkT8Fx/ks.jpg" alt="user" />
            <h1>Kaushal Saraswat</h1>
          </Link>
          <Link to="/" className="users">
            <img src="https://i.ibb.co/RCkT8Fx/ks.jpg" alt="user" />
            <h1>Kaushal Saraswat</h1>
          </Link>
          <Link to="/" className="users">
            <img src="https://i.ibb.co/RCkT8Fx/ks.jpg" alt="user" />
            <h1>Kaushal Saraswat</h1>
          </Link>{' '}
          <Link to="/" className="users">
            <img src="https://i.ibb.co/RCkT8Fx/ks.jpg" alt="user" />
            <h1>Kaushal Saraswat</h1>
          </Link>{' '}
          <Link to="/" className="users">
            <img src="https://i.ibb.co/RCkT8Fx/ks.jpg" alt="user" />
            <h1>Kaushal Saraswat</h1>
          </Link>{' '}
          <Link to="/" className="users">
            <img src="https://i.ibb.co/RCkT8Fx/ks.jpg" alt="user" />
            <h1>Kaushal Saraswat</h1>
          </Link>
        </div>
        <Link className="link" to="/pending">
          <i className="fas fa-list"></i>
          <span>Dashboard</span>
        </Link>
      </div>
    </Fragment>
  );
};

export default Sidebar;
