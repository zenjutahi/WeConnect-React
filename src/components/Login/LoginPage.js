import React from 'react';
import LoginForm from './Loginform';

class LoginPage extends React.Component {
  state = {
    message: undefined,
    access_token: undefined,
    error: undefined
  }

  handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const api_call = await fetch('https://weconnect-api-db.herokuapp.com/api/auth/login',{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
    });
    const data = await api_call.json();
    console.log(data)
    this.setState({
      message: data.message,
      access_token: data.access_token,
      error: data.error
    });
    localStorage.clear();
    if (data.message == "Successfully Loged In"){
      setTimeout(window.location.assign('/businesses/list'), 1000);
    };
  }

  render () {
    return(
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-xs-8 col-sm-10 col-md-5 col-sm-offset-1
               text-center">
                  <div className="card">
                      <div className="card-header">
                          <h3 className="card-title"><i className="fa fa-link"></i>WeConnect</h3>
                      </div>
                      <div className="card-body">
                      <LoginForm handleLogin={this.handleLogin} message={this.state.message} error={this.state.error}/>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    );
  }
};
export default LoginPage;
