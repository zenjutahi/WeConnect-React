import React from "react";
import "./buss.css";



class BusinessRegisterForm extends React.Component {
  state = {
    name: '',
    description: '',
    location: '',
    category: ''
  }

  onInputChange = (e) => {
    console.log(e.target);
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const state = {}
    Object.defineProperty(state, inputName, {value: inputValue, enumerable: true})
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const formData = this.state;
    this.props.handleBussRegister(formData)
  }

  render() {
  return(
  <div className="card small-card">
    <form onSubmit={this.onSubmit}>
      <div className="card-block">
        {this.props.message && (
          <div className="alert alert-danger" role="alert">
            <p>{this.props.message}</p>
          </div>
        )}
        <div className="form-group row">
          <label htmlFor="example-text-input" className="col-4 col-form-label">
            Business Name :
          </label>
          <div className="col-8">
            <input  onChange={this.onInputChange}
                    value={ this.state.name }
                    className="form-control"
                    type="text"
                    id="name"
                    name="name" />
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
              onChange={this.onInputChange}
              value={ this.state.description }
              className="form-control"
              type="text"
              id="description"
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
              onChange={this.onInputChange}
              value={ this.state.location }
              className="custom-select mb-2 mr-sm-2 mb-sm-0"
              id="inlineFormCustomSelect1"
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
              onChange={this.onInputChange}
              value={ this.state.category }
              className="custom-select mb-2 mr-sm-2 mb-sm-0"
              id="inlineFormCustomSelect2"
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
          value={this.props.disabled ? "Processing...." : "Register"}
          className="btn btn-primary my-submit try-back review_edit_buttn"
          disabled={this.props.disabled}
        />
      </div>
    </form>
  </div>
);
}
}
export default BusinessRegisterForm;
