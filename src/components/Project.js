import React from "react";
import "../style.css";

function Project(props) {
  return (
    <div className="wrapper">
    <div className="card">
      <div className="img-container">
        <img src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title} 
          </li>
          <li>
            <strong>GitHub:</strong><a href={props.github}> {props.github} </a>
          </li>
          <li>
            <strong>Deployed:</strong><a href={props.deployed}>{props.deployed}</a> 
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Project;
