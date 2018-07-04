import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <NavLink className="navbar-brand" to="/">
      <i className="fa fa-link" />WeConnect
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarsItems">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard">
            Manage Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register/businesses">
            Register Business
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/businesses/list">
            Listings
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-nav narbar-right">
        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">
            Log Out
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
