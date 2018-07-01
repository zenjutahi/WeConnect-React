import React from "react";
import RegisterForm from "./RegisterForm";

class RegisterPage extends React.Component {
  state = {
    message: undefined,
    disabled: false
  };

  handleRegister = async e => {
    e.preventDefault();
    const firstName = e.target.first_name.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    this.setState({ disabled: "disabled" });

    const api_call = await fetch(
      "https://weconnect-api-db.herokuapp.com/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          first_name: firstName,
          username: username,
          email: email,
          password: password
        })
      }
    );
    const data = await api_call.json();
    if (data.message === `${username}'s account succesfully created`) {
      window.localStorage.setItem("register_message", data.message);
      window.location.assign("/login");
      this.setState({
        message: undefined
      });
      return;
    }
    this.setState({
      message: data.message,
      disabled: false
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-xs-8 col-sm-8 col-md-6 col-sm-offset-2
              col-md-offset-4 text-center"
          >
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fa fa-link" />Sign Up to Weconnect
                </h3>
              </div>

              <div className="card-body">
                <RegisterForm
                  handleSignin={this.handleRegister}
                  message={this.state.message}
                  disabled={this.state.disabled}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
