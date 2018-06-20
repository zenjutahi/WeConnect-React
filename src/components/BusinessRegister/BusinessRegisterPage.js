import React from 'react';
import BusinessRegisterForm from './BusinessRegisterForm';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const BusinessRegisterPage = () => (
  <div>
  <NavBar />
  <header id="header">
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <h2><i className="fa fa-pencil-square-o"></i> Business Registration :<small> Register Your busines with WeConnect</small></h2>
        </div>
        <div className="col-md-2">


        </div>
      </div>
    </div>
  </header>
  <div className="hold-background">
    <section id="breadcrumb">
      <div className="container">
        <ol className="breadcrumb try-back">
          <li className="active">Register Your Businesss</li>
        </ol>
      </div>
    </section>
    <BusinessRegisterForm />
  </div>
  <Footer />
  </div>

);

export default BusinessRegisterPage;
