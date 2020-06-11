import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  return (
    <Fragment>
      <div className="modal" id="myModal">
        <div className="modal-dialog  modal-dialog-scrollable">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>

            <div className="modal-body">
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Users;
