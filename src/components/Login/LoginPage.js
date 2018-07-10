import React from "react";
import LoginForm from "./Loginform";
import { weConnectLogin } from '../../Services/Services';

class LoginPage extends React.Component {
  state = {
    message: undefined,
    disabled: false
  };

  componentDidMount () {
    console.log('mounted');
  }

  handleLogin = async (formData) => {
    console.log(formData);
    const email = formData.email;
    const password = formData.password;

    this.setState({ disabled: "disabled" });

    const data = await weConnectLogin(email, password);
    console.log(data)
    this.setState({
      message: data.message,
      disabled: false
    });
    localStorage.clear();
    localStorage.setItem("accessToken", data.access_token);
    if (data.message === "Successfully Loged In") {
      setTimeout(window.location.assign("/dashboard"), 10);
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
                </div>
                <div className="card-body">
                  <LoginForm
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
export default LoginPage;
