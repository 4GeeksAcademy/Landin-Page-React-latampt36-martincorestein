import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron bg-light p-3 mb-3">
      <div className="container">
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa,
          ipsam, eligendi, in quo sunt possimus non incidunt odit vero
          aliquid similique quaerat nam nobis illo aspernatur vitae fugiat
          numquam repellat.
        </p>
        <div className="text-start">
          <a href="#" className="btn btn-primary btn-lg">
            Call to action!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
