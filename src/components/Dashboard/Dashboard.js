import React from "react";
import { Link } from "react-router-dom";
import wraper from "../Wraper";

const Dashboard = ({name,location,category}) => (
  <tbody>
    <tr>
      <td>{name}</td>
      <td>{location}</td>
      <td>{category}</td>
      <td>
        <Link to="">View</Link>
      </td>
    </tr>
  </tbody>
);

class DashboardList extends React.Component {
  state = {
    mybusinesses: [],
    message: undefined
  };

  componentDidMount() {
    fetch("https://weconnect-api-db.herokuapp.com/api/businesses/all", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`
      }
    }).then(response => {
      if (response.status !== 200 || response.status === 401) {
        window.localStorage.setItem(
          "register_message",
          "Please login to View Your businesses"
        );
        window.location.assign("/login");
        return;
      }

      // Examine the text in the response
      response.json().then(data => {
        let userBuss = data.business ? data.business : [];
        this.setState({
          mybusinesses: userBuss,
          message: data.message
        });
      });
    });
  }

  getToken() {
    const token = localStorage.getItem("accessToken");
    if (token == null) {
      window.localStorage.setItem(
        "register_message",
        "Please login to View Your businesses"
      );
      window.location.assign("/login");
    } else {
      return token;
    }
  }

  render() {
    let mybusinesses = this.state.mybusinesses.map(singleBusiness => {
      return (
        <Dashboard
          key={singleBusiness["Businesss id"]}
          description={singleBusiness["Business description"]}
          name={singleBusiness["Business name"]}
          location={singleBusiness["Business location"]}
          category={singleBusiness["Business category"]}
        />
      );
    });
    // get no. of businesses
    const bussNumber = Object.keys(mybusinesses).length
    window.localStorage.setItem("bussNumber", bussNumber);
    
    return (
      <div className="col-md-12">
        <br />
        {this.state.message && (
          <div className="alert alert-info col-md-8 message_user" role="alert">
            <p>{this.state.message}</p>
          </div>
        )}
        <div className="card-block">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Business Name</th>
                <th>Business Location</th>
                <th>Business Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            {mybusinesses}
          </table>
        </div>
      </div>
    );
  }
}

export default DashboardList;
