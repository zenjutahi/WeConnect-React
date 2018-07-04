import React from "react";
import BusinessEdit from "./BusinessEdit";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

class BusinessEditPage extends React.Component {
  state = {
    message: undefined,
    bussId : this.props.match.params.id,
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

  handleBussEdit = async e => {
    e.preventDefault();

    if(this.props.location.state === undefined){
      window.location.assign(`/business/edit/${this.state.bussId}`);
    }

    const name = e.target.name.value;
    const description = e.target.description.value;
    const location = e.target.location.value;
    const category = e.target.category.value;

    this.setState({ disabled: "disabled" });

    const myState = response => {
      console.log(response.message);
      if (
        response.hasOwnProperty("message") &&
        response.message === "Business edited successfully"
      ) {
        this.props.history.push({
          pathname: "/dashboard"
        });
      } else if (response.hasOwnProperty("msg")) {
        window.localStorage.setItem(
          "register_message",
          "Please login to Edit Business"
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
    await fetch(`https://weconnect-api-db.herokuapp.com/api/businesses/${this.state.bussId}`, {
      method: "PUT",
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
      .then(myState)
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
                  <small>Edit Your busines</small>
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
                <li className="active">Edit Your Businesss</li>
              </ol>
            </div>
          </section>
          <section id="main">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-block">
                      <h4>Fill the Form to Edit your </h4>
                    </div>
                  </div>
                  <BusinessEdit
                    handleBussEdit={this.handleBussEdit}
                    bussId={this.state.bussId}
                    editBuss={this.props.location.state ? this.props.location.state.editBuss : ""}
                    message={this.state.message}
                    disabled={this.state.disabled}
                    history={this.props.history}
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

export default BusinessEditPage;
