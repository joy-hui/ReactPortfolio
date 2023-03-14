import React from "react";
import { NavLink } from 'react-router-dom';
import "../../style.css";
import photo from "../../images/图片1.png";

function Home() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid home">
        <div className="container">
          <img src={photo} className="img1"></img>
          <h2 className="h2add">Hui Zhao</h2>
          <br />
          <h3 className="h2add">About Me</h3>
          <p className="h2add">
          I'm a learning the front-end web development in Birmingham in the UK.
            <br />
            If you have any question, please
            <NavLink to="/contact" end className="text-warning">
              contact me
            </NavLink>
            .
          </p>
     
        </div>
      </div>
    </div>
  );
}

export default Home;
