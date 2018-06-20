import React from 'react';
import { Link } from 'react-router-dom';

const BussNav = () => (
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <Link class="navbar-brand" to="register"><i class="fa fa-link"></i>WeConnect</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsItems">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link class="nav-link" to="/">Manage Business<span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item ">
                <a class="nav-link" href="buss_profile.html">Reviews</a>
            </li>
          <li class="nav-item active">
                <Link class="nav-link" to="/businesses/list">Listings</Link>
          </li>
        </ul>
        <ul class="navbar-nav narbar-right">
            <form class="form-inline mt-2 mt-md-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-primary try-back" type="submit">Search</button>
            </form>
            <li class="nav-item">
              <Link class="nav-link" to="/">Log Out</Link>
            </li>
        </ul>
      </div>
  </nav>

);

export default BussNav;
