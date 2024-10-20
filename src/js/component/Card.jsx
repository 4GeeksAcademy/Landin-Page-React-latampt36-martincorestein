import React from "react";

const Card = (props) => {
  return (
    <div className="d-flex justify-content-center mb-4">
      <div className="card">
        <img
          src="https://via.placeholder.com/500x325"
          className="card-img-top"
          alt="Placeholder"
        />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
