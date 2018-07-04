import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleLogin}>
        {this.props.message &&
          this.props.message !== "Successfully Loged In" && (
            <div className="alert alert-danger" role="alert">
              <p>{this.props.message}</p>
            </div>
          )}
        {!this.props.message &&
          window.localStorage.getItem("register_message") && (
            <div className="alert alert-success" role="alert">
              <p>{window.localStorage.getItem("register_message")}</p>
            </div>
          )}
        {this.props.message === "Successfully Loged In" && (
          <div className="alert alert-success" role="alert">
            <p>{this.props.message}</p>
          </div>
        )}
        <div className="form-group">
          <label className="sr-only">email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label className="sr-only">password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <input
          type="submit"
          value={this.props.disabled ? "Signing in..." : "Sign in"}
          className="btn btn-primary btn-block try-back"
          disabled={this.props.disabled}
        />
        <br />
        <p>
          Not a registred User ? Please <Link to="/user/register">Sign Up</Link>
        </p>
        <p>
          <Link to="/resetpassword">Forgot password </Link>
        </p>
      </form>
    );
  }
}
export default LoginForm;
