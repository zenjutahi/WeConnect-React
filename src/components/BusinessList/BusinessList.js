import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const Business = ({name, description, location, category, id}) => (
  <div className="col-md-4">
    <div className="card mb-4 box-shadow">
      <div className="card-body business_card_body">
        <h5 className="card-title">{name}</h5>
        <div className="text-wraper">
          <p className="card-text">{description}</p>
        </div>
        <div className="card-wrapper">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Location: {location}</li>
            <li className="list-group-item">Category: {category}</li>
          </ul>
          <br />
          <p>
            <Link to={`/business/${id}`}><button type="button" className="btn btn-primary btn-sm buttn">
              View Business
            </button></Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);

class BusinessList extends React.Component {

  handleClick = this.handleClick.bind(this);
  state = {
    businesses: [],
    message: undefined,
    currentPage: 1,
    todosPerPage: 6
  };


  componentDidMount() {
    fetch("https://weconnect-api-db.herokuapp.com/api/businesses", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`
      }
    }).then(response => {
      if (response.status !== 200 || response.status === 401) {
        window.localStorage.setItem(
          "register_message",
          "Please login to View businesses"
        );
        window.location.assign("/login");
        return;
      }

      response.json().then(data => {
        let allBuss = data.businesses ? data.businesses : [];
        this.setState({ businesses: allBuss });
      });
    });
  }

  getToken() {
    const token = localStorage.getItem("accessToken");
    if (token == null) {
      window.localStorage.setItem(
        "register_message",
        "Please login to View businesses"
      );
      window.location.assign("/login");
    } else {
      return token;
    }
  }

  handleSearch = e => {
    e.preventDefault();
    const q = e.target.value;
    const page = 1;
    const limit = 9;

    this.setState({ businesses: [] });

    fetch(
      `https://weconnect-api-db.herokuapp.com/api/businesses/search?q=${q}&page=${page}&limit=${limit}`,
      {
        headers: { "Content-Type": "application/json" }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        let searchBuss = data["Search result"] ? data["Search result"] : [];
        this.setState({
          businesses: searchBuss,
          message: data.message
        });
      });
  };

  handleCategory = e => {
    e.preventDefault();
    const category = e.target.value;
    const page = 1;
    const limit = 9;

    this.setState({ businesses: [] });

    fetch(
      `https://weconnect-api-db.herokuapp.com/api/businesses/filter?category=${category}&page=${page}&limit=${limit}`,
      {
        headers: { "Content-Type": "application/json" }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        let filterBuss = data["Filter result"] ? data["Filter result"] : [];
        this.setState({
          businesses: filterBuss,
          message: data.message
        });
      });
  };

  handleLocation = e => {
    e.preventDefault();
    const location = e.target.value;
    const page = 1;
    const limit = 9;

    this.setState({ businesses: [] });

    fetch(
      `https://weconnect-api-db.herokuapp.com/api/businesses/filter?location=${location}&page=${page}&limit=${limit}`,
      {
        headers: { "Content-Type": "application/json" }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        let filterBuss = data["Filter result"] ? data["Filter result"] : [];
        this.setState({
          businesses: filterBuss,
          message: data.message
        });
      });
  };

  handleClick(event) {
  this.setState({
    currentPage: Number(event.target.id)
  });
  }

  render() {
    const { businesses, currentPage, todosPerPage, message} = this.state;

    // Logic for displaying current
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentBusiness = businesses.slice(indexOfFirstTodo, indexOfLastTodo);
    //map businesses
    let businessList = currentBusiness.map(business => {
      return (
        <Business
          key={business["Businesss id"]}
          id={business["Businesss id"]}
          description={business["Business description"]}
          name={business["Business name"]}
          location={business["Business location"]}
          category={business["Business category"]}
        />
      );
    });

    // Logic for displaying current todos
    // const indexOfLastTodo = currentPage * todosPerPage;
    // const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    // const currentTodos = businessList.slice(indexOfFirstTodo, indexOfLastTodo);
    //
    // const renderTodos = currentTodos.map((businessList, index) => {
    //   return <li key={index}>{businessList}</li>;
    // });

    // Logic for displaying page numbers


    return (
      <div className="hold-background">
        <section id="breadcrumb">
          <div className="container col-md-8">
            <ol className="breadcrumb try-back">
              <input
                className="form-control mr-sm-2 col-md-3"
                type="text"
                onChange={this.handleSearch}
                placeholder="Search"
                name="search"
                aria-label="Search"
              />
              <div className="col-md-4">
                <select
                  className="custom-select r-sm-2"
                  id="inlineFormCustomSelect"
                  onChange={this.handleLocation}
                >
                  <option value="">Choose Location...</option>
                  <option value="Kajiado">Kajiado</option>
                  <option value="Nairobi">Nairobi</option>
                  <option value="Thika">Thika</option>
                  <option value="RoySambu">RoySambu</option>
                  <option value="Kiambu">Kiambu</option>
                </select>
              </div>
              <div className="col-md-4">
                <select
                  className="custom-select r-sm-2"
                  id="inlineFormCustomSelect"
                  onChange={this.handleCategory}
                >
                  <option value="">Choose Category...</option>
                  <option value="Technology">Technology</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Advertising">Advertising</option>
                  <option value="Farming">Farming</option>
                </select>
              </div>
            </ol>
          </div>
        </section>
        <div>
          <section id="main">
            <div className="container col-md-9">
              {message && (
                <div
                  className="alert alert-info col-md-10 message_list"
                  role="alert"
                >
                  <p>{message}</p>
                </div>
              )}
              <div className="row justify-content-center">
                <div className="business_card col-md-12">{businessList}</div>
                <Pagination
                  business={this.state.businesses ? this.state.businesses: []}
                  handlePageClick={this.handleClick}
                  todosPerPage={this.state.todosPerPage}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default BusinessList;
