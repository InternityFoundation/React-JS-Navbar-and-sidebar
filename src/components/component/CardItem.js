import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CardItem = ({ data }) => {
  const { author, img, heading, description, createdAt } = data;
  return (
    <Fragment>
      <section className="card-item ">
        <div className="card">
          <div className="image-data">
            <img className="background-image" src={img} alt="img" />
            <div className="publication-details">
              <Link to="#" className="author">
                <i className="fas fa-user-circle"></i> {author}
              </Link>
              <span className="date">
                <i className="fas fa-calendar-alt"></i> {createdAt}
              </span>
            </div>
          </div>
          <div className="post-data">
            <h1 id="title" className="title">
              {heading}
            </h1>
            <p className="description">{description}</p>
            <div className="cta">
              <Link to="#">Read More &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CardItem;
