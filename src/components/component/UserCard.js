import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const UserCard = () => {
  return (
    <Fragment>
      <section className="card-item ">
        <div className="user-card">
          <div className="user-image-data">
            <img
              className="background-image"
              src="https://i.ibb.co/KG7Mhgz/cse.jpg"
              alt="img"
            />
            <div className="publication-details">
              <Link to="#" className="author">
                <i className="fas fa-user-circle"></i> Kaushal Saraswat
              </Link>
              <span className="date">
                <i className="fas fa-calendar-alt"></i> 12-12-12
              </span>
            </div>
          </div>
          <div className="post-data">
            <div className="user-details">
              <a href="profile.html">
                <img
                  className="user-img"
                  src="https://i.ibb.co/RCkT8Fx/ks.jpg"
                  alt=""
                />
              </a>
              <h1>@Kaushal</h1>
            </div>

            <h1 id="title" className="user-title">
              Blog Title 1
            </h1>
            <p className="user-description">
              Lorem ipsum dolor sit amet consectetur adipisicing eli
              Sintpossimus corporis sunt necessitatibus! Minus{' '}
              <Link className="show-more" to="/">
                show More
              </Link>
            </p>
          </div>
          <div className="comment">
            <div class="btn-group">
              <button type="button" class="btn btn-danger">
                <i class="fas fa-heart"></i> <span class="badge ">4</span>
              </button>
              <button type="button" class="btn btn-primary">
                <i class="fas fa-heart-broken"></i>{' '}
                <span class="badge ">4</span>
              </button>
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Write Your Comment Here"
              />
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-primary">
                <i class="fas fa-comment"></i> <span class="badge ">4</span>
              </button>
              <button type="button" class="btn btn-success">
                <i class="fas fa-share-alt"></i> <span class="badge ">4</span>
              </button>
            </div>
          </div>

          <div class="posts">
            <div class="post bg-light my-1 p-1">
              <div>
                <a href="profile.html">
                  <img
                    class="round-img "
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    alt=""
                  />
                  <h4>John Doe</h4>
                </a>
              </div>

              <div>
                <p class="my-1 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione dolores officia assumenda dolor maiores sint pariatur
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
                  <a href="#demo" class="show-more" data-toggle="collapse">
                    Show all
                  </a>
                  <div id="demo" class="collapse">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione dolores officia assumenda dolor maiores sint
                    pariatur Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </p>

                <button class="btn-light">
                  <i class="fas fa-thumbs-up"></i> <span>4</span>
                </button>

                <button class="btn-light">
                  <i class="fas fa-thumbs-down"></i>
                </button>
                <a href="post.html" class="btn-light btn-primary">
                  <i class="fas fa-trash"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="posts">
            <div class="post bg-light my-1 p-1">
              <div>
                <a href="profile.html">
                  <img
                    class="round-img "
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    alt=""
                  />
                  <h4>John Doe</h4>
                </a>
              </div>

              <div>
                <p class="my-1 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione dolores officia assumenda dolor maiores sint pariatur
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
                  <a href="#demo2" class="show-more" data-toggle="collapse">
                    Show all
                  </a>
                  <div id="demo2" class="collapse">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione dolores officia assumenda dolor maiores sint
                    pariatur Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </p>

                <button class="btn-light">
                  <i class="fas fa-thumbs-up"></i> <span>4</span>
                </button>

                <button class="btn-light">
                  <i class="fas fa-thumbs-down"></i>
                </button>
                <a href="post.html" class="btn-light btn-primary">
                  <i class="fas fa-trash"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="posts">
            <div class="post bg-light my-1 p-1">
              <div>
                <a href="profile.html">
                  <img
                    class="round-img "
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    alt=""
                  />
                  <h4>John Doe</h4>
                </a>
              </div>

              <div>
                <p class="my-1 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione dolores officia assumenda dolor maiores sint pariatur
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
                  <a href="#demo3" class="show-more" data-toggle="collapse">
                    Show all
                  </a>
                  <div id="demo3" class="collapse">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione dolores officia assumenda dolor maiores sint
                    pariatur Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </p>

                <button class="btn-light">
                  <i class="fas fa-thumbs-up"></i> <span>4</span>
                </button>

                <button class="btn-light">
                  <i class="fas fa-thumbs-down"></i>
                </button>
                <a href="post.html" class="btn-light btn-primary">
                  <i class="fas fa-trash"></i>
                </a>
              </div>
            </div>
          </div>
          <h1 className="none">H</h1>
        </div>
      </section>
      <section className="card-item ">
        <div className="user-card">
          <div className="user-image-data">
            <img
              className="background-image"
              src="https://i.ibb.co/QjBngkH/dark.jpg"
              alt="img"
            />
            <div className="publication-details">
              <Link to="#" className="author">
                <i className="fas fa-user-circle"></i> Kaushal Saraswat
              </Link>
              <span className="date">
                <i className="fas fa-calendar-alt"></i> 12-12-12
              </span>
            </div>
          </div>
          <div className="post-data">
            <div className="user-details">
              <a href="profile.html">
                <img
                  className="user-img"
                  src="https://i.ibb.co/RCkT8Fx/ks.jpg"
                  alt=""
                />
              </a>
              <h1>@Kaushal</h1>
            </div>

            <h1 id="title" className="user-title">
              Blog Title 1
            </h1>
            <p className="user-description">
              Lorem ipsum dolor sit amet consectetur adipisicing eli
              Sintpossimus corporis sunt necessitatibus! Minus{' '}
              <Link className="show-more" to="/">
                show More
              </Link>
            </p>
          </div>
          <div className="comment">
            <div class="btn-group">
              <button type="button" class="btn btn-danger">
                <i class="fas fa-heart"></i> <span class="badge ">4</span>
              </button>
              <button type="button" class="btn btn-primary">
                <i class="fas fa-heart-broken"></i>{' '}
                <span class="badge ">4</span>
              </button>
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Write Your Comment Here"
              />
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-primary">
                <i class="fas fa-comment"></i> <span class="badge ">4</span>
              </button>
              <button type="button" class="btn btn-success">
                <i class="fas fa-share-alt"></i> <span class="badge ">4</span>
              </button>
            </div>
          </div>

          <div class="posts">
            <div class="post bg-light my-1 p-1">
              <div>
                <a href="profile.html">
                  <img
                    class="round-img "
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    alt=""
                  />
                  <h4>John Doe</h4>
                </a>
              </div>

              <div>
                <p class="my-1 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione dolores officia assumenda dolor maiores sint pariatur
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
                  <a href="#demo" class="show-more" data-toggle="collapse">
                    Show all
                  </a>
                  <div id="demo" class="collapse">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione dolores officia assumenda dolor maiores sint
                    pariatur Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </p>

                <button class="btn-light">
                  <i class="fas fa-thumbs-up"></i> <span>4</span>
                </button>

                <button class="btn-light">
                  <i class="fas fa-thumbs-down"></i>
                </button>
                <a href="post.html" class="btn-light btn-primary">
                  <i class="fas fa-trash"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="posts">
            <div class="post bg-light my-1 p-1">
              <div>
                <a href="profile.html">
                  <img
                    class="round-img "
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    alt=""
                  />
                  <h4>John Doe</h4>
                </a>
              </div>

              <div>
                <p class="my-1 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione dolores officia assumenda dolor maiores sint pariatur
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
                  <a href="#demo2" class="show-more" data-toggle="collapse">
                    Show all
                  </a>
                  <div id="demo2" class="collapse">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione dolores officia assumenda dolor maiores sint
                    pariatur Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </p>

                <button class="btn-light">
                  <i class="fas fa-thumbs-up"></i> <span>4</span>
                </button>

                <button class="btn-light">
                  <i class="fas fa-thumbs-down"></i>
                </button>
                <a href="post.html" class="btn-light btn-primary">
                  <i class="fas fa-trash"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="posts">
            <div class="post bg-light my-1 p-1">
              <div>
                <a href="profile.html">
                  <img
                    class="round-img "
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    alt=""
                  />
                  <h4>John Doe</h4>
                </a>
              </div>

              <div>
                <p class="my-1 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione dolores officia assumenda dolor maiores sint pariatur
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
                  <a href="#demo3" class="show-more" data-toggle="collapse">
                    Show all
                  </a>
                  <div id="demo3" class="collapse">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione dolores officia assumenda dolor maiores sint
                    pariatur Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </p>

                <button class="btn-light">
                  <i class="fas fa-thumbs-up"></i> <span>4</span>
                </button>

                <button class="btn-light">
                  <i class="fas fa-thumbs-down"></i>
                </button>
                <a href="post.html" class="btn-light btn-primary">
                  <i class="fas fa-trash"></i>
                </a>
              </div>
            </div>
          </div>
          <h1 className="none">H</h1>
        </div>
      </section>
    </Fragment>
  );
};

export default UserCard;
