import React from 'react';
import BusinessList from './BusinessList';
import BussNav from './BussNav';
import Footer from '../Footer/Footer';

const BusinessListPage = () => (
  <div>
    <BussNav />

    <header id="header">
      <div class="container">
        <div class="row">
          <div class="col-md-10">
            <h2><i class="fa fa-search"></i> Search businesses :<small></small></h2>
          </div>
          <div class="col-md-2">


          </div>
        </div>
      </div>
    </header>
    <div class="hold-background">
    <section id="breadcrumb">
      <div class="container">
        <ol class="breadcrumb try-back">
          <li class="active">Search for other Businesss</li>
        </ol>
      </div>
    </section>
    <BusinessList />
    </div>

    <Footer/>
  </div>

);

export default BusinessListPage;
