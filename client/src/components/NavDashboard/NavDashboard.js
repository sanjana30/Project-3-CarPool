import React, {Component} from "react";
import { Route , withRouter} from 'react-router-dom';
import "./NavDashboard.css";
import {Input, FormBtn} from "../../components/Form";


class NavDashboard extends Component {

    handleLogout = () => {
        sessionStorage.clear();
        this.props.history.push('/login');
    };

    handleUserProfile = () => {
        this.props.history.push('/profile');
    };


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light navStyle">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="navdropdown nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                               data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" onClick={this.handleUserProfile}>My
                                    Profile</a>
                                {/*<a class="dropdown-item" href="#"></a>*/}
                                <a className="dropdown-item" onClick={this.handleLogout}>Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}


export default withRouter(NavDashboard);


