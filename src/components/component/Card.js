import React from 'react';

const Card = ({ match }) => {
  const id = match.params.id;
  console.log(id);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Card;
