import React from "react";
import { NavLink } from "react-router-dom";
import "../style.css";

function NavTabs() {
  return (
    <ul
      style={{ backgroundColor: "#343a40", color: "white" }}
      className="nav nav-tabs "
    >
      <li className="nav-item mynav">Portfolio</li>
      <li className="nav-item navadd">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
      </li>
      {/* <li className="nav-item navadd">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
      </li> */}
      <li className="nav-item navadd">
        <NavLink
          to="ProjectGallery"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Project Gallery
        </NavLink>
      </li>
      {/* <li className="nav-item navadd">
        <NavLink
          to="contact/learn"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Learn
        </NavLink>
      </li> */}
      <li className="nav-item navadd">
        <NavLink
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
