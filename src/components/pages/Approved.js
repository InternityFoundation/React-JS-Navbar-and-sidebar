import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Card from '../component/CardItem';

const Approved = () => {
  const data = [
    {
      id: 1,
      author: 'Archit Jain',
      heading: 'Blog Title 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sintpossimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiisdolor? Illo perferendis eveniet cum cupiditate aliquam',
      img: 'https://i.ibb.co/KG7Mhgz/cse.jpg',
      createdAt: '15/2/2021',
    },
    {
      id: 2,
      author: 'Manali Somani',
      heading: 'Blog Title 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sintpossimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiisdolor? Illo perferendis eveniet cum cupiditate aliquam',
      img: 'https://i.ibb.co/LDT95T1/Audios-Co-Streaming-App.jpg',
      createdAt: '17/12/2020',
    },
    {
      id: 3,
      author: 'Kaushal Saraswat',
      heading: 'Blog Title 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sintpossimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiisdolor? Illo perferendis eveniet cum cupiditate aliquam',
      img: 'https://i.ibb.co/QjBngkH/dark.jpg',
      createdAt: '12/2/2025',
    },
    {
      id: 4,
      author: 'Archit Jain',
      heading: 'Blog Title 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sintpossimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiisdolor? Illo perferendis eveniet cum cupiditate aliquam',
      img: 'https://i.ibb.co/KG7Mhgz/cse.jpg',
      createdAt: '15/2/2021',
    },
    {
      id: 5,
      author: 'Manali Somani',
      heading: 'Blog Title 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sintpossimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiisdolor? Illo perferendis eveniet cum cupiditate aliquam',
      img: 'https://i.ibb.co/LDT95T1/Audios-Co-Streaming-App.jpg',
      createdAt: '17/12/2020',
    },
  ];

  return (
    <Fragment>
      <section className="container form-box-3">
        <div className="btn-box">
          <Link to="/draft" className="btn-dash-3 draft">
            <i className="far fa-edit" id="tooltip">
              <span className="tooltiptext">Draft</span>
            </i>{' '}
          </Link>
          <Link to="/pending" className="btn-dash-3 pending">
            <i className="far fa-calendar-minus" id="tooltip">
              <span className="tooltiptext">PendingForApproval</span>
            </i>{' '}
          </Link>
          <Link to="/correction" className="btn-dash-3 correction">
            <i className="far fa-clock" id="tooltip">
              <span className="tooltiptext">PendingForCorrection</span>
            </i>{' '}
          </Link>
          <Link to="/approved" className="btn-dash-3 approved-active">
            <i className="far fa-check-circle" id="tooltip">
              <span className="tooltiptext">Approved</span>
            </i>{' '}
          </Link>
        </div>

        {data.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </section>
    </Fragment>
  );
};

export default Approved;
