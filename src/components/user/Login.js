import React, { Component } from 'react';
import wraper from './components/Wraper';
import { render } from 'react-dom';

class Login extends React.Component {
  render() {
    return (
      <wraper>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xs-8 col-sm-10 col-md-4 col-sm-offset-1
                 text-center">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title"><i class="fa fa-link"></i>WeConnect</h3>
                        </div>

                        <div class="card-body">
                            <form role="form" action="index.html" >
                                <div class="form-group">
                                    <label class="sr-only">Username</label>
                                    <input type="username" name="username" id="username" class=
                                    "form-control" placeholder="Username">
                                </div>

                                <div class="form-group">
                                    <label class="sr-only">Email</label>
                                    <input type="password" name="password" id="password" class=
                                    "form-control" placeholder="Password">
                                </div>

                            <input type="submit" value="Log in" class="btn btn-primary btn-block try-back">
                            <br>
                            <p>Not a registred User ? Please <a href="registration.html" >Sign Up</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </raper>
    );
  }
};

return default Login;
