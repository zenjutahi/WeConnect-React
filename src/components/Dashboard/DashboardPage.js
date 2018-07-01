import React from "react";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import DashboardList from "../Dashboard/Dashboard";
import { NavLink, Link } from "react-router-dom";

const DashboardPage = () => (
  <div>
    <NavBar />
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h2>
              <i className="fa fa-cog" /> Dashboard :<small>
                {" "}
                Manage Your Businesses{" "}
              </small>
            </h2>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    </header>
    <div className="hold-background">
      <section id="breadcrumb">
        <div className="container">
          <ol className="breadcrumb try-back">
            <li className="active">Dashboard</li>
          </ol>
        </div>
      </section>

      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card ">
                <div className="card-header try-back">Businesses Overview</div>
                <DashboardList />
              </div>
            </div>
            <div className="col-md-4">
              <div className="list-group">
                <a href="#" className="list-group-item active try-back">
                  <i className="fa fa-cog" />
                  My Dashboard
                </a>
                <Link
                  to="buss_profile.html"
                  className="list-group-item list-group-item-action"
                >
                  <i className="fa fa-empire" /> No. of businesses : { window.localStorage.getItem("bussNumber")}
                </Link>
                <Link to="#" className="list-group-item list-group-item-action">
                  <i className="fa fa-adjust" /> Visual Setup
                </Link>
                <Link to="#" className="list-group-item list-group-item-action">
                  <i className="fa fa-align-left" /> Impressions
                </Link>
              </div>
              <div className="class-padding">
                <div className="card">
                  <div className="card-block">
                    <h5>
                      <i className="fa fa-spinner" /> Profile Setup{" "}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default DashboardPage;
