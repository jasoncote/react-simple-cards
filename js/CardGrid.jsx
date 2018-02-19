import React from 'react';
import Card from './Card';

import data from '../data.json';

const CardGrid = () => {
  return (
    <div>
      <h1 className="my-5">Card grid with Modal prototype</h1>
      <div className="card-grid row">
        { data.shows.map(show => (
          <Card show={show} />
        ))}

      </div>
    </div>
  );
};


export default CardGrid;