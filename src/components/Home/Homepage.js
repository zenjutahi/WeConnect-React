import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div
        className="col-xs-8 col-sm-10 col-md-12 col-sm-offset-2
           text-center"
      >
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <i className="fa fa-link" />WeConnect
            </h3>
          </div>
          <div className="card-body">
            <main role="main" className="inner cover">
              <h1 className="cover-heading">About WeConnect</h1>
              <h5 className="lead">
                Professional networking puts you in touch with business
                opportunities galore, such as new clients and potential
                partnerships, so it should definitely be at the top of the list
                of things to do well when you have a very small business to run.
              </h5>
              <h4 className="cover-heading">Build for Business Owners</h4>
            </main>
          </div>
        </div>
        <br />
        <br />
      </div>
      <Link to="/login" className="btn btn-lg btn-secondary">
        Get Started now
      </Link>>
    </div>
  </div>
);

export default Homepage;
