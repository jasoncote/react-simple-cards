import React from 'react';
import { Link } from 'react-router-dom';
import Modal from "./Modal";

const Card = (props) => {
  return (
    <div className="col-3 mb-4">
      <div className="card">
        <a data-toggle="modal" data-target={`#${props.show.imdbID}`}>
          <img
            className="card-img-top"
            alt={`${props.show.name} Info`}
            src={`/public/img/posters/${props.show.poster}`}
          />
        </a>
        <div className="card-body">
          {/*<Link to={`/card/${props.show.imdbID}`}>See more</Link>*/}
          <h3 className="card-title">{props.show.title}</h3>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${props.show.imdbID}`}>
            {`Learn more about ${props.show.title}`}
          </button>

        </div>
        <Modal show={props.show} />
      </div>
    </div>
  );
};

export default Card;
