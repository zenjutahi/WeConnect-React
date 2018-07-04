import React from "react";
import ResetPasswordForm from "./ResetPasswordForm";

class ResetPasswordPage extends React.Component {
  state = {
    message: undefined,
    disabled: false
  };

  handleLogin = async e => {
    e.preventDefault();
    const email = e.target.email.value;

    this.setState({ disabled: "disabled" });

    const api_call = await fetch(
      "https://weconnect-api-db.herokuapp.com/api/auth/resetpassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email
        })
      }
    );
    const data = await api_call.json();
    console.log(data);
    this.setState({
      message: data.message,
      disabled: false
    });
    if (data.message === "Check your email address for new password") {
      setTimeout(window.location.assign("/login"), 14000);
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xs-8 col-sm-10 col-md-5 col-sm-offset-1
               text-center"
            >
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="fa fa-link" />WeConnect
                  </h3>
                  <p>
                    Enter the Email you used to Sign Up
                  </p>
                </div>
                <div className="card-body">
                  <ResetPasswordForm
                    handleLogin={this.handleLogin}
                    message={this.state.message}
                    disabled={this.state.disabled}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ResetPasswordPage;
