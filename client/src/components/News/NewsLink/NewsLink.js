import React from "react";

const NewsLink = props => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.imageURL} alt="news story" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <button type="button" className="btn btn-success">
          <a href={props.link} style={{ color: "white" }}>
            View Story
          </a>
        </button>
      </div>
    </div>
  );
};

export default NewsLink;
