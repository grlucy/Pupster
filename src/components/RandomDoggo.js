import React from "react";

function RandomDoggo(props) {
  return (
    <div className="border rounded p-2 d-inline-block">
      <img
        src={props.dogImage}
        className="rounded doggoIMG"
        alt="Random Doggo Friend"
      />
      <div className="d-flex justify-content-between">
        <div
          className="rounded bg-danger text-white d-inline-block p-2 mt-2"
          id="thumbs-down-div"
          onClick={props.handleDislike}
        >
          <h5>
            <i className="fas fa-thumbs-down"></i>
          </h5>
        </div>
        <div
          className="rounded bg-success text-white d-inline-block p-2 mt-2"
          id="thumbs-up-div"
          onClick={props.handleLike}
        >
          <h5>
            <i className="fas fa-thumbs-up"></i>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default RandomDoggo;
