import React from 'react';
import { Link } from 'react-router-dom';
import Modal from "./Modal";

const Card = (props) => {
  return (
    <div className="card col-3 mb-4">
      <img
        className="card-img-top"
        alt={`${props.show.name} Info`}
        src={`/public/img/posters/${props.show.poster}`}
      />
      <div className="card-block">
        {/*<Link to={`/card/${props.show.imdbID}`}>See more</Link>*/}
        <h3 className="card-title">{props.show.title}</h3>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${props.show.imdbID}`}>
          Launch demo modal
        </button>

      </div>
      <Modal show={props.show} />
    </div>
  );
};

export default Card;
