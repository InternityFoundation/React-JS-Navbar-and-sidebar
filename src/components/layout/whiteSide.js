import React, { Fragment } from 'react';

const Sidebar = () => {
  return (
    <Fragment>
      <input type="checkbox" id="check" />
      <div className="sidebar">
        <center>
          <img
            src="https://i.ibb.co/VvHpdWk/download.png"
            className="profile_image"
            alt=""
          />
          <h4>Internity</h4>
        </center>
        <a href="/blogs">
          <i className="fas fa-user-circle"></i>
          <span>Dashboard</span>
        </a>
        <a href="#">
          <i className="fas fa-desktop"></i>
          <span>Learning Structure</span>
        </a>
        <a href="#">
          <i className="fas fa-calendar-check"></i>
          <span>Our Program</span>
        </a>
        <a href="#">
          <i className="fas fa-th"></i>
          <span>Hackathons</span>
        </a>
        <a href="#">
          <i className="fas fa-info-circle"></i>
          <span>Our Impact</span>
        </a>
        <a href="#">
          <i className="fas fa-sliders-h"></i>
          <span>Settings</span>
        </a>
      </div>
    </Fragment>
  );
};

export default Sidebar;
