import React from 'react';

const Modal = (props) => {
  return (
    <div className="modal" id={props.show.imdbID} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-3">
                  <img
                    className="card-img-top"
                    alt={`${props.show.name} Info`}
                    src={`/public/img/posters/${props.show.poster}`}
                  />
                </div>
                <div className="col-8 offset-1">
                  <h1>{props.show.title}</h1>
                  <p>{props.show.description}</p>
                </div>
              </div>
            </div>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;