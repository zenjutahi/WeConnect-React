import React from "react";
import { Link } from "react-router-dom";
import meeting from "../../static/images/meeting.jpg"

class BusinessView extends React.Component {
  state = {
    business: []
  };

  componentDidMount() {
    fetch(
      `https://weconnect-api-db.herokuapp.com/api/businesses/${
        this.props.bussId
      }`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken()}`
        }
      }
    ).then(response => {
      if (response.status !== 200 || response.status === 401) {
        window.localStorage.setItem(
          "register_message",
          "Please login to View businesses"
        );
        window.location.assign("/login");
        return;
      }

      response.json().then(data => {
        let bussDetails = data.business ? data.business : [];
        console.log("eduysvibjonklhyiwdksjchlil");
        console.log(bussDetails);
        this.setState({ business: bussDetails });
      });
    });
  }

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
  editFunc = e => {
    this.props.history.push({
      pathname: `/business/edit/${this.props.bussId}`,
      state: {
        editBuss: this.state.business
      }
    });
  };

  deleteFunc = e => {
    this.props.history.push({
      pathname: `/business/delete/${this.props.bussId}`,
      state: {
        editBuss: this.state.business
      }
    });
  };

  render() {
    return (
      <div className="card buss_card col-md-12">
        <div className="row">
          <div className="col-6 col-md-6">
            <img
              src={meeting}
              className="img-fluid img-thumbnail"
              alt="Responsive"
            />
          </div>
          <div className="col-6 col-md-6">
            {window.localStorage.getItem("bussDel") && (
            <div className="alert alert-danger" role="alert">
              <p>{window.localStorage.getItem("bussDel")}</p>
            </div>
              )}
            <h2>{this.state.business["Business name"]}</h2>
            <br />
            <p>{this.state.business["Business description"]}</p>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Businesss Category : {this.state.business["Business category"]}
          </li>
          <li className="list-group-item">
            Businesss Location : {this.state.business["Business location"]}
          </li>
          <li className="list-group-item">
            <button type="button" className="btn btn-primary btn-sm edit_button" onClick={this.editFunc}>
              Edit Business
            </button>
            <Link to={`/business/delete/${this.props.bussId}`}><button type="button" className="btn btn-primary btn-sm">
              Delete Business
            </button></Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default BusinessView;
