import React from 'react';
import { Link } from 'react-router-dom';
import Modal from "./Modal";

const CardDetails = (props) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <img
            className="card-img-top"
            alt={`${props.name} Info`}
            src={`/public/img/posters/${props.show.poster}`}
          />
        </div>
        <div className="col-8">
          <h3 className="card-title">{props.show.title}</h3>
          <strong>{props.show.year}</strong>
          <p>{props.show.description}</p>
          <a className="btn btn-primary" href="/">Return to list</a>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
