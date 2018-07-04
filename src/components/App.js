import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Notifications from "react-notify-toast";
import Homepage from "./Home/Homepage";
import DashboardPage from "./Dashboard/DashboardPage";
import LoginPage from "./Login/LoginPage";
import Logout from "./Logout/Logout";
import RegisterPage from "./Register/RegisterPage";
import BusinessViewPage from "./BusinessView/BusinessViewPage";
import BusinessEditPage from "./BussActions/BusinessEditPage";
import ResetPasswordPage from "./ResetPassword/ResetPasswordPage";
import DeleteBusiness from "./BussActions/BusinessDelete";
import BusinessRegisterPage from "./BusinessRegister/BusinessRegisterPage";
import BusinessListPage from "./BusinessList/BusinessListPage";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("accessToken") !== null ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const App = () => (
  <BrowserRouter>
    <div>
      <Notifications />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/resetpassword" component={ResetPasswordPage} />
      <PrivateRoute exact path="/logout" component={Logout} />
      <PrivateRoute exact path="/dashboard" component={DashboardPage} />
      <Route exact path="/user/register" component={RegisterPage} />
      <PrivateRoute
        exact
        path="/register/businesses"
        component={BusinessRegisterPage}
      />
      <PrivateRoute exact path="/businesses/list" component={BusinessListPage} />
      <PrivateRoute exact path="/business/edit/:id" component={BusinessEditPage} />
      <PrivateRoute exact path="/business/delete/:id" component={DeleteBusiness} />
      <PrivateRoute exact path="/business/:id" component={BusinessViewPage} />
    </div>
  </BrowserRouter>
);

export default App;
