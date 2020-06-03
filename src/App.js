import React, { Fragment } from 'react';
import './App.css';

function App() {
  return (
    <Fragment>
      <input type="checkbox" id="check" />
      <header>
        <label for="check">
          <i class="fas fa-bars" id="sidebar_btn"></i>
        </label>
        <div class="left_area">
          <h3>
            internity <span>foundation</span>
          </h3>
        </div>
        <div class="right_area">
          <a href="#" class="logout_btn">
            Logout
          </a>
        </div>
      </header>
      <div class="sidebar">
        <center>
          <img
            src="https://i.ibb.co/nPwMq1g/ks.jpg"
            class="profile_image"
            alt=""
          />
          <h4>Kaushal</h4>
        </center>
        <a href="#">
          <i class="fas fa-user-circle"></i>
          <span>About us</span>
        </a>
        <a href="#">
          <i class="fas fa-desktop"></i>
          <span>Learning Structure</span>
        </a>
        <a href="#">
          <i class="fas fa-calendar-check"></i>
          <span>Our Program</span>
        </a>
        <a href="#">
          <i class="fas fa-th"></i>
          <span>Hackathons</span>
        </a>
        <a href="#">
          <i class="fas fa-info-circle"></i>
          <span>Our Impact</span>
        </a>
        <a href="#">
          <i class="fas fa-sliders-h"></i>
          <span>Settings</span>
        </a>
      </div>

      <div class="content"></div>
    </Fragment>
  );
}

export default App;
