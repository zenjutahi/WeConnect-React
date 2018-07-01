import React from "react";

class Logout extends React.Component {
  state = {
    message: undefined
  };

  componentDidMount() {
    fetch("https://weconnect-api-db.herokuapp.com/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`
      }
    }).then(response => {
      if (response.status === 200) {
        localStorage.clear();
        window.location.assign("/login");
        return;
      }

      response.json().then(data => {
        this.setState({ message: data.message });
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
    return (
      <div>
      </div>
  );
 }
}

export default Logout;
