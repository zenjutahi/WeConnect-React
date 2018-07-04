import React from "react";

class DeleteBusiness extends React.Component {
  state = {
    bussId : this.props.match.params.id,
  };

  componentDidMount() {
    fetch(`https://weconnect-api-db.herokuapp.com/api/businesses/${this.state.bussId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`
      }
    }).then(response => {
      console.log(response.message);
      if (response.status === 202) {
        window.location.assign("/dashboard");
      }else if(response.status === 403){
        localStorage.setItem('bussDel', "You can only delete your business");
        window.location.assign(`/business/${this.state.bussId}`);
      }
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
        <div class="loader" id="loader-2">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
  );
 }
}

export default DeleteBusiness;
