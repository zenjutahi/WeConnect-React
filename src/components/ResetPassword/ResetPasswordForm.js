import React from "react";
import { Link } from "react-router-dom";

class ResetPasswordForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleLogin}>
        {this.props.message &&
          this.props.message !== "Check your email address for new password" && (
            <div className="alert alert-danger" role="alert">
              <p>{this.props.message}</p>
            </div>
          )}
        {this.props.message === "Check your email address for new password" && (
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
        <input
          type="submit"
          value={this.props.disabled ? "Reseting..." : "Send"}
          className="btn btn-primary btn-block try-back"
          disabled={this.props.disabled}
        />
        <br />
        <p>
          Go back to <Link to="/login">Login</Link>
        </p>
      </form>
    );
  }
}
export default ResetPasswordForm;
