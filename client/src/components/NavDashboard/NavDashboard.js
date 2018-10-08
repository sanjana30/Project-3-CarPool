import React, { Component } from "react";
import { Route, withRouter } from 'react-router-dom';
import "./NavDashboard.css";
import { Input, FormBtn } from "../../components/Form";
import Logo from "../images/logo.jpg";
import API from "../../utils/API";

class NavDashboard extends Component {
    state = {
        nameofuser : ""
    }
    getUserName = () => {
        API.fetchUserName()
            .then(res => {
                console.log(res.data.name);
                this.setState({nameofuser: res.data.name});
            })
            .catch(err => console.log(err));
    }
    componentDidMount = () => {
        this.getUserName();
    };
    handleLogout = () => {
        sessionStorage.clear();
        this.props.history.push('/login');
    };

    handleUserProfile = () => {
        this.props.history.push('/profile');
    };

    styles = {
        navStyle: {
            background: " #FF8787",
            // marginBottom: 20
        },
        navdropdown: {
            float: "right",
            color: "#FF8787",
            flexDirection: "row-reverse" 
        }
    };


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" style={this.styles.navStyle}>
                <a className="navbar-brand" href="#">
                    <img src={Logo} width="30" height="100%" alt="logo" className="img-responsive" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown" style={this.styles.navdropdown}>
                    <ul className="navbar-nav" style={this.styles.navdropdown}>
                        <li className="navdropdown nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                {this.state.nameofuser}
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


