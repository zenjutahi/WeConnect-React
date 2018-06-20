import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import LoginPage from './Login/LoginPage';
import RegisterPage from './Register/RegisterPage';
import BusinessRegisterPage from './BusinessRegister/BusinessRegisterPage';
import BusinessListPage from './BusinessList/BusinessListPage';

const App = () => (
    <BrowserRouter>
        <div>
            <Notifications />
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/businesses" component={BusinessRegisterPage} />
            <Route exact path="/businesses/list" component={BusinessListPage} />
        </div>
    </BrowserRouter>
);

export default App;
