import React, { Fragment } from 'react';
// import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';
import WhiteNav from '../layout/whiteNav';

const landing = () => {
  return (
    <Fragment>
      <WhiteNav />
      <Sidebar />
      <div className="content"></div>
    </Fragment>
  );
};

export default landing;
