import React from "react";

class BusinessReview extends React.Component {
  state = {
    reviews: []
  };

  componentDidMount() {
    fetch(
      `https://weconnect-api-db.herokuapp.com/api/businesses/${
        this.props.bussId
      }/reviews`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken()}`
        }
      }
    ).then(response => {
      if (response.status !== 201 || response.status === 401) {
        window.localStorage.setItem(
          "register_message",
          "Please login to View businesses"
        );
        window.location.assign("/login");
        return;
      }

      response.json().then(data => {
        let ReviewDetails = data["reviews "] ? data["reviews "] : [];
        console.log("eduysvibjonklhyiwdksjchlil");
        console.log(data["reviews "]);
        this.setState({ reviews: ReviewDetails });
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
  setStars() {
    const star = <i className="fa fa-star" />;
    const noStar = <i className="fa fa-star-o" />;

  }

  render() {
    let allReviews = this.state.reviews.map(review => {
    return (
      <tr>
        <th scope="row">#</th>
        <td>{review["Review value"]}</td>
        <td>{review["Review comment"]}</td>
        <td>
          <small>
            <p>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </p>
          </small>
        </td>
      </tr>
      );
    });
    return (
      allReviews
    );
  }
}

export default BusinessReview;
