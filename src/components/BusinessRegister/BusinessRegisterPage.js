import React from "react";
import BusinessRegisterForm from "./BusinessRegisterForm";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

class BusinessRegisterPage extends React.Component {
  state = {
    message: undefined,
    tokenMessage: undefined,
    disabled: false
  };

  getToken() {
    const token = localStorage.getItem("accessToken");
    if (token == null) {
      window.localStorage.setItem(
        "register_message",
        "Please login to Register Business"
      );
      window.location.assign("/login");
    } else {
      return token;
    }
  }

  handleBussRegister = async e => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const location = e.target.location.value;
    const category = e.target.category.value;

    this.setState({ disabled: "disabled" });

    const setNewState = response => {
      if (
        response.hasOwnProperty("message") &&
        response.message === "New business has been created"
      ) {
        this.props.history.push({
          pathname: "/dashboard"
        });
      } else if (response.hasOwnProperty("msg")) {
        window.localStorage.setItem(
          "register_message",
          "Please login to Register Business"
        );
        this.props.history.push({
          pathname: "/login"
        });
      } else {
        this.setState({
          message: response.hasOwnProperty("message") && response["message"],
          disabled: false
        });
      }
    };
    await fetch("https://weconnect-api-db.herokuapp.com/api/businesses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`
      },
      body: JSON.stringify({
        name: name,
        description: description,
        location: location,
        category: category
      })
    })
      // .then((resp) => console.log(resp.json() ))
      .then(resp => resp.json())
      .then(setNewState)
      .catch(function(error) {
        console.log("Request failed due to", error);
      });
  };

  render() {
    return (
      <div>
        <NavBar />
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <h2>
                  <small> Register Your busines with WeConnect</small>
                </h2>
              </div>
              <div className="col-md-2" />
            </div>
          </div>
        </header>
        <div className="hold-background">
          <section id="breadcrumb">
            <div className="container">
              <ol className="breadcrumb try-back">
                <li className="active">Register Your Businesss</li>
              </ol>
            </div>
          </section>
          <section id="main">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-block">
                      <h4>Fill the Form to Register your </h4>
                    </div>
                  </div>
                  <BusinessRegisterForm
                    handleBussRegister={this.handleBussRegister}
                    message={this.state.message}
                    disabled={this.state.disabled}
                  />
                </div>
                <div className="col-md-4">
                  <div className="card ">
                    <div className="card-header main-color-bg try-back">
                      Profile Overview
                    </div>
                    <div className="card-block">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="card dash-box">
                            <div className="card-block">
                              <h2>
                                <i className="fa fa-users" /> 24
                              </h2>
                              <h4>Friends</h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card dash-box">
                            <div className="card-block">
                              <h2>
                                <i className="fa fa-slideshare" /> 13
                              </h2>
                              <h4>Shares</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card small-card cardOne">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">JEFF MUTAHI NJOGU</li>
                      <li className="list-group-item">jeffmnjogu@gmail.com</li>
                    </ul>
                    <div className="card-block">
                      <p className="card-text">
                        Link A Business: +254 714 777 833<br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BusinessRegisterPage;
