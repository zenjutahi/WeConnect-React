import React from "react";
import { Link } from "react-router-dom";

class RegisterForm extends React.Component {
  state = {
    firstName: '',
    username: '',
    email: '',
    password: ''
  }
  onInputChange = (e) => {
    console.log('changed: ', e.target.value);
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const state = {}
    Object.defineProperty(state, inputName, {value: inputValue, enumerable: true})
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const formData = this.state;
    console.log(formData)
    this.props.handleSignin(formData)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.props.message && (
          <div className="alert alert-danger" role="alert">
            <p>{this.props.message}</p>
          </div>
        )}
        <div className="form-group">
          <label className="sr-only">firstName</label>
          <input
            onChange={this.onInputChange}
            value={ this.state.firstName }
            type="text"
            name="firstName"
            id="firstName"
            className="form-control"
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <label className="sr-only">username</label>
          <input
            onChange={this.onInputChange}
            value={ this.state.username }
            type="username"
            name="username"
            id="username"
            className="form-control"
            placeholder="Username"
          />
        </div>

        <div className="form-group">
          <label className="sr-only">email</label>
          <input
            onChange={this.onInputChange}
            value={ this.state.email }
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="jane.doe@example.com"
          />
        </div>

        <div className="form-group">
          <label className="sr-only">password</label>
          <input
            onChange={this.onInputChange}
            value={ this.state.password }
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Password"
          />
        </div>

        <input
          type="submit"
          value={this.props.disabled ? "Signing up..." : "Sign Up"}
          className="btn btn-primary btn-block try-back"
          disabled={this.props.disabled}
        />
        <br />
        <p>
          Already registred User ?<Link to="/login"> Sign In</Link>
        </p>
      </form>
    );
  }
}

export default RegisterForm;
