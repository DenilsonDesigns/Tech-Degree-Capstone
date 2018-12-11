import React from "react";

const NewsLink = props => {
  console.log(props.imageURL);
  if (props.imageURL === null) {
    return null;
  } else {
    return (
      <div className="card cardhover" style={{ width: "18rem" }}>
        <img
          style={{ height: "9rem" }}
          className="card-img-top"
          src={props.imageURL}
          alt="news story"
        />
        <div className="card-body">
          <h5 className="card-title">
            {props.title ? props.title.slice(0, 37) + "..." : ""}
          </h5>
          <p className="card-text news-card-desc">
            {props.description ? props.description.slice(0, 55) + "..." : ""}
          </p>
          <button type="button" className="btn btn-success">
            <a href={props.link} style={{ color: "white" }}>
              View Story
            </a>
          </button>
        </div>
      </div>
    );
  }
};

export default NewsLink;
