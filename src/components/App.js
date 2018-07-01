import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Notifications from "react-notify-toast";
import Homepage from "./Home/Homepage";
import DashboardPage from "./Dashboard/DashboardPage";
import LoginPage from "./Login/LoginPage";
import Logout from "./Logout/Logout";
import RegisterPage from "./Register/RegisterPage";
import BusinessRegisterPage from "./BusinessRegister/BusinessRegisterPage";
import BusinessListPage from "./BusinessList/BusinessListPage";

const App = () => (
  <BrowserRouter>
    <div>
      <Notifications />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/dashboard" component={DashboardPage} />
      <Route exact path="/user/register" component={RegisterPage} />
      <Route
        exact
        path="/register/businesses"
        component={BusinessRegisterPage}
      />
      <Route exact path="/businesses/list" component={BusinessListPage} />
    </div>
  </BrowserRouter>
);

export default App;
