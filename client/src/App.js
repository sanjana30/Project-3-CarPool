import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Layout"
import Login from "./pages/Login";
import Registration from "./pages/Registration";

const App = () => (
    <Router>
        <div>
            <Switch>
                    <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Registration} />
            </Switch>
        </div>
    </Router>

);

export default App;
