import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <Link className="navbar-brand" to="register"><i className="fa fa-link"></i>WeConnect</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsItems">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item">
          <Link className="nav-link" to="/">Manage Profile</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="businesses">Business Registration<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="buss_profile.html">Reviews</a>
          </li>
        <li className="nav-item">
          <Link className="nav-link" to="businesses/list">Listings</Link>
        </li>
      </ul>
      <ul className="navbar-nav narbar-right">
          <li className="nav-item">
            <Link className="nav-link" to="/">Log Out</Link>
          </li>
      </ul>
    </div>
  </nav>

);

export default NavBar;
