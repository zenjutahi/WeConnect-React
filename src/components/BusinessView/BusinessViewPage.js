import React from "react";
import BusinessView from "./BusinessView";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BusinessReview from "../BusinessReview/BusinessReview"

class BusinessViewPage extends React.Component {
  state = {
    bussId : this.props.match.params.id,
    message: undefined,
    disabled: false
  };


  getToken() {
    const token = localStorage.getItem("accessToken");
    if (token == null) {
      window.localStorage.setItem(
        "register_message",
        "Please login to View business"
      );
      window.location.assign("/login");
    } else {
      return token;
    }
  }

  handleReview = async e => {
    e.preventDefault();

    const value = e.target.value.value;
    const comments = e.target.comments.value;

    this.setState({ disabled: "disabled" });
    localStorage.removeItem("bussDel");

    const myState = response => {
      console.log(response.message);

      if (response.hasOwnProperty("msg")) {
        window.localStorage.setItem(
          "register_message",
          "Please login to Edit Business"
        );
        this.props.history.push({
          pathname: "/login"
        });
      } else if (response.message !== "You have successfully created a review"){
        this.setState({
          message: response.hasOwnProperty("message") && response.message,
          disabled: false
        });
      }else {
        this.setState({
          message: response.hasOwnProperty("message") && response.message,
          disabled: false
        });
        setTimeout(window.location.assign(`/business/${this.state.bussId}`), 7000);
      }
    };
    await fetch(`https://weconnect-api-db.herokuapp.com/api/businesses/${this.state.bussId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`
      },
      body: JSON.stringify({
        value: value,
        comments: comments
      })
    })
      // .then((resp) => console.log(resp.json() ))
      .then(resp => resp.json())
      .then(myState)
  };

  displayMessage = e => {
    if(this.state.message && this.state.message !== "You have successfully created a review"){
      return(
        <div className="alert alert-danger" role="alert">
          <p>{this.state.message}</p>
        </div>
      );
    }else if(this.state.message && this.state.message === "You have successfully created a review"){
      return (
        <div className="alert alert-success" role="alert">
          <p>{this.state.message}</p>
        </div>
    );
    }

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
                    <i className="fa fa-empire" /> Business Searches{" "}
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
                  <li className="active">My Business</li>
                </ol>
              </div>
            </section>

            <section id="main">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <div className="card ">
                      <div className="card-header try-back">Business Profile</div>
                      <BusinessView bussId={this.state.bussId}
                                    history={this.props.history}/>
                    </div>
                    <div className="card class-padding">
                      <div className="card-block">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>#rates</th>
                              <th>Value</th>
                              <th>Comment</th>
                              <th>Reviews</th>
                            </tr>
                          </thead>
                          <tbody>
                            <BusinessReview bussId={this.state.bussId}/>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="list-group">
                      <a href="#" className="list-group-item active try-back">
                        <i className="fa fa-cog" />
                        Our Contacts
                      </a>
                      <a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-phone-square" /> Tell No.
                      </a>
                      <a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-envelope" /> Email
                      </a>
                      <a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-film" /> Telegram
                      </a>
                    </div>
                    <div className="class-padding">
                      <div className="card">
                        <div className="card-block">
                          <h5>Add Review</h5>
                          <p className="card-text">
                            <form onSubmit={this.handleReview}>
                              {this.displayMessage()}
                              <div className="form-group">
                                <label >Review Value</label>
                                <input type="text" className="form-control" name="value" placeholder="4.9"/>
                              </div>
                              <div class="form-group">
                                <label htmlFor="exampleInputPassword1">Review Comment</label>
                                <textarea
                                  className="form-control"
                                  type="text"
                                  name="comments"
                                  placeholder="Comment here.."
                                />
                              </div>
                              <button type="submit" disabled={this.state.disabled} class="btn btn-primary review_edit_buttn">{this.state.disabled ? "Submiting" : "Submit"} </button>
                            </form>
                          </p>
                        </div>
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
export default BusinessViewPage;
