import React from "react";
import "./buss.css";

const BusinessRegisterForm = ({handleBussRegister, message, disabled}) => (
  <div className="card small-card">
    <form onSubmit={handleBussRegister}>
      <div className="card-block">
        {message && (
          <div className="alert alert-danger" role="alert">
            <p>{message}</p>
          </div>
        )}
        <div className="form-group row">
          <label htmlFor="example-text-input" className="col-4 col-form-label">
            Business Name :
          </label>
          <div className="col-8">
            <input className="form-control" type="text" name="name" />
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="example-search-input"
            className="col-4 col-form-label"
          >
            Business Description:
          </label>
          <div className="col-8">
            <textarea
              className="form-control"
              type="text"
              name="description"
              placeholder="Description here..."
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            className="col-4 col-form-label"
            htmlFor="inlineFormCustomSelect"
          >
            Location:{" "}
          </label>
          <div className="col-8">
            <select
              className="custom-select mb-2 mr-sm-2 mb-sm-0"
              id="inlineFormCustomSelect"
              name="location"
            >
              <option value="">Select...</option>
              <option value="Kajiado">Kajiado</option>
              <option value="Nairobi">Nairobi</option>
              <option value="Kiambu">Kiambu</option>
              <option value="Mombasa">Mombasa</option>
              <option value="Turkana">Turkana</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label
            className="col-4 col-form-label"
            htmlFor="inlineFormCustomSelect"
          >
            Category :
          </label>
          <div className="col-8">
            <select
              className="custom-select mb-2 mr-sm-2 mb-sm-0"
              id="inlineFormCustomSelect"
              name="category"
            >
              <option value="">Select...</option>
              <option value="Technology">Technology</option>
              <option value="Farming">Farming</option>
              <option value="Retail">Advertising</option>
              <option value="Clinic">Agriculture</option>
            </select>
          </div>
        </div>
        <input
          type="submit"
          value={disabled ? "Processing...." : "Register"}
          className="btn btn-primary my-submit try-back review_edit_buttn"
          disabled={disabled}
        />
      </div>
    </form>
  </div>
);

export default BusinessRegisterForm;
