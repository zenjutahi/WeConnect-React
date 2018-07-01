import React from "react";
import { NavLink } from "react-router-dom";

const BussNav = () => (
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <NavLink class="navbar-brand" to="register">
      <i class="fa fa-link" />WeConnect
    </NavLink>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div class="collapse navbar-collapse" id="navbarsItems">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <Link class="nav-link" to="/">
            Manage Business
          </Link>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="buss_profile.html">
            Reviews
          </a>
        </li>
        <li class="nav-item ">
          <Link class="nav-link" to="/businesses/list">
            Listings
          </Link>
        </li>
      </ul>
      <ul class="navbar-nav narbar-right">
        <li class="nav-item">
          <Link class="nav-link" to="/">
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default BussNav;
