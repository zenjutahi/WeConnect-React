import React from 'react';
import './buss.css';
import { Link } from 'react-router-dom';

const BusinessRegisterForm = () => (

  <section id="main">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-block">
                    <h4>Fill the Form below to Register </h4>
                </div>
              </div>
            <div className="card small-card">
                <div className="card-block">
                    <div className="form-group row">
                       <label for="example-text-input" className="col-4 col-form-label">Business Name :</label>
                        <div className="col-8">
                          <input className="form-control" type="text" value="Artisanal kale" id="example-text-input"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label for="example-search-input" className="col-4 col-form-label">Business Street Adress</label>
                        <div className="col-8">
                          <input className="form-control" type="number" value="4651" id="example-search-input"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label for="example-email-input" className="col-4 col-form-label">City/Town :</label>
                        <div className="col-8">
                          <input className="form-control" type="text" value="Nakuru" id="example-email-input"/>
                        </div>
                      </div>
                      <div className="form-group row">
                          <label className="col-4 col-form-label" for="inlineFormCustomSelect">County :</label>
                          <div className="col-8">
                          <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
                            <option selected>Choose...</option>
                            <option value="1">Kajiado</option>
                            <option value="2">Nairobi</option>
                            <option value="3">Kiambu</option>
                            <option value="1">Mombasa</option>
                            <option value="2">Nyamira</option>
                            <option value="3">Turkana</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                              <label className="col-4 col-form-label" for="inlineFormCustomSelect">Type of Business :</label>
                              <div className="col-8">
                              <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                      </div>
                      <div className="form-group row">
                          <label for="example-datetime-local-input" className="col-4 col-form-label">Business Email :</label>
                          <div className="col-8">
                            <input className="form-control" type="email" value="bootstrap@example.com" id="example-email-input"/>
                          </div>
                        </div>
                      <div className="form-group row">
                        <label for="example-password-input" className="col-4 col-form-label">Website :</label>
                        <div className="col-8">
                          <input className="form-control" type="url" value="www.businessname.co.ke" id="example-number-input"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label for="example-number-input" className="col-4 col-form-label">Business Phone No. :</label>
                        <div className="col-8">
                          <input className="form-control" type="tel" value="+25407 290199" id="example-number-input"/>
                          <small id="passwordHelpInline" className="text-muted">
                              Must be a valid number.
                          </small>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label for="example-date-input" className="col-4 col-form-label">Date of start: </label>
                        <div className="col-8">
                          <input className="form-control" type="date" value="2011-08-19" id="example-date-input"/>
                          <small id="passwordHelpInline" className="text-muted">
                              Give date which business was started.
                          </small>
                        </div>
                      </div>
                      <button type="submit " className="btn btn-primary my-submit try-back">Register</button>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card ">
                <div className="card-header main-color-bg try-back">
                  Profile Overview
                </div>
                <div className="card-block">
                    <div className="row">
                        <div className="col-sm-6">
                          <div className="card dash-box">
                            <div className="card-block">
                              <h2><i className="fa fa-users"></i> 24</h2>
                              <h4>Friends</h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card dash-box">
                            <div className="card-block">
                              <h2><i className="fa fa-slideshare"></i> 13</h2>
                              <h4>Shares</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
            <div className="card small-card cardOne">
              <div className="card-block">
                <h4 className="card-title">JEFF MUTAHI NJOGU</h4>
                <p className="card-text" data-ng-bind-html="true">
                  <small>30999975, +254722905016<br/>jeffmnjogu@gmail.com</small><br/>
                   Business Name Registration Queries:<br/>
                   Name Search Queries:<br/>
                    +254 790 724 504<br/></p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
              <div className="card-block">
                <p className="card-text">
                    Link A Business:
                    +254 714 777 833<br/>

                    Email: cr@ag.go.ke
                </p>
              </div>
            </div>

        </div>
      </div>
    </div>
  </section>
);

export default BusinessRegisterForm;
