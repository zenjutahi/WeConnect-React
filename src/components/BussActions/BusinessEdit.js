import React from "react";

class BusinessEdit extends React.Component {
  state = {

  }


  // componentDidMount() {
  //   fetch(`https://weconnect-api-db.herokuapp.com/api/businesses/${this.props.bussId}`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${this.getToken()}`
  //     }
  //   }).then(response => {
  //     if (response.status !== 200 || response.status === 401) {
  //       window.localStorage.setItem(
  //         "register_message",
  //         "Please login to View businesses"
  //       );
  //       window.location.assign("/login");
  //       return;
  //     }
  //
  //     response.json().then(data => {
  //       let myBuss = data.business ? data.business : [];
  //       this.setState({ myBuss: myBuss });
  //     });
  //   });
  // }
  //
  // getToken() {
  //   const token = localStorage.getItem("accessToken");
  //   if (token == null) {
  //     window.localStorage.setItem(
  //       "register_message",
  //       "Please login to View business"
  //     );
  //     window.location.assign("/login");
  //   } else {
  //     return token;
  //   }
  // }

  render() {
    return (
      <div className="card small-card">
        <form onSubmit={this.props.handleBussEdit}>
          <div className="card-block">
            {this.props.message && (
              <div className="alert alert-danger" role="alert">
                <p>{this.props.message}</p>
              </div>
            )}
            <div className="form-group row">
              <label
                htmlFor="example-text-input"
                className="col-4 col-form-label"
              >
                Business Name :
              </label>
              <div className="col-8">
                <input className="form-control" type="text" name="name" placeholder={this.props.editBuss["Business name"]}/>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="example-search-input"
                className="col-4 col-form-label"
              >
                Business Description:
              </label>
              <div className="col-8">
                <textarea
                  className="form-control"
                  type="text"
                  name="description"
                  placeholder={this.props.editBuss["Business description"]}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                className="col-4 col-form-label"
                htmlFor="inlineFormCustomSelect"
              >
                Location:{" "}
              </label>
              <div className="col-8">
                <select
                  className="custom-select mb-2 mr-sm-2 mb-sm-0"
                  id="inlineFormCustomSelect"
                  name="location"
                >
                  <option value="">{this.props.editBuss["Business location"]}</option>
                  <option value="Kajiado">Kajiado</option>
                  <option value="Nairobi">Nairobi</option>
                  <option value="Kiambu">Kiambu</option>
                  <option value="Mombasa">Mombasa</option>
                  <option value="Turkana">Turkana</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label
                className="col-4 col-form-label"
                htmlFor="inlineFormCustomSelect"
              >
                Category :
              </label>
              <div className="col-8">
                <select
                  className="custom-select mb-2 mr-sm-2 mb-sm-0"
                  id="inlineFormCustomSelect"
                  name="category"
                >
                  <option value="">{this.props.editBuss["Business category"]}</option>
                  <option value="Technology">Technology</option>
                  <option value="Farming">Farming</option>
                  <option value="Retail">Advertising</option>
                  <option value="Clinic">Agriculture</option>
                </select>
              </div>
            </div>
            <input
              type="submit"
              value={this.props.disabled ? "Editing.." : "Edit"}
              className="btn btn-primary my-submit try-back buss_edit_buttn"
              disabled={this.props.disabled}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default BusinessEdit;
