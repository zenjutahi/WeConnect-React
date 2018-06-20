import React from 'react';
import { Link } from 'react-router-dom';

class RegisterForm extends React.Component {
  render () {
    return (
      <form onSubmit={this.props.handleRegister}>
          {this.props.message && this.props.message !== "New user Succesfully created" &&
          <div class="alert alert-danger" role="alert">
            <p>{this.props.message}</p>
          </div> }
          <div className="form-group">
              <label className="sr-only">first_name</label>
              <input type="text" name="first_name" id="
              first_name" className="form-control"
              placeholder="First Name"/>
          </div>
          <div className="form-group">
              <label className="sr-only">username</label>
              <input type="username" name="username" id="username" className=
              "form-control" placeholder="Username"/>
          </div>

          <div className="form-group">
              <label className="sr-only">email</label>
              <input type="email" name="email" id="email" className=
              "form-control" placeholder="jane.doe@example.com"/>
          </div>

          <div className="form-group">
              <label className="sr-only">password</label>
              <input type="password" name="password" id="password"
              className="form-control" placeholder=
              "Password"/>
          </div>

      <input type="submit" value="Register" className="btn btn-primary btn-block try-back"/>
      <br />
      <p>Already registred User ?<Link to="/" > Sign In</Link></p>
      </form>
    );
  }
};


export default RegisterForm;
