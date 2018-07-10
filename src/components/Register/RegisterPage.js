import React from "react";
import RegisterForm from "./RegisterForm";
import { weConnectRegister } from '../../Services/Services';

class RegisterPage extends React.Component {
  state = {
    message: undefined,
    disabled: false
  };

  handleRegister = async (formData) => {

    this.setState({ disabled: "disabled" });

    const data = await weConnectRegister(formData);
    if (data.message === `${formData.username}'s account succesfully created`) {
      console
      localStorage.setItem("register_message", data.message);
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
