import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Layout";
import Nav from "./components/NavDashboard"
import Master from "./components/Master";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import MyProfile from "./pages/MyProfile";

const App = () => (
    <Router>
        <div>
            {/* <Nav /> */}
            <Switch>
                <Route exact path="/" component={Master}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Registration}/>
                <Route exact path="/dashboard" component={Home}/>
                <Route exact path="/profile" component={MyProfile}/>
            </Switch>
        </div>
    </Router>

);

export default App;
