import React from 'react';
import Card from './Card';

import data from '../data.json';

const CardGrid = () => {
  return (
    <div className="card-grid row">
      { data.shows.map(show => (
        <Card show={show} />
      ))}

    </div>
  );
};


export default CardGrid;