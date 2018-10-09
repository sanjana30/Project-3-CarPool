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
            color: "#333333",
            textAlign: "left"
            //flexDirection: "row-reverse" 
        }
    };


    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light    " style={this.styles.navStyle}>
                <a className="navbar-brand" href="#">
                    <img src={Logo} width="30" height="100%" alt="logo" className="img-responsive"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="buttonStyle" >{this.state.nameofuser}</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" style={this.styles.navdropdown}>
                    <ul className="navbar-nav" style={this.styles.navdropdown}>
                        <li className="nav-item active">
                            <a className="dropdown-item" onClick={this.handleUserProfile}>My Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="dropdown-item" onClick={this.handleLogout}>Logout</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}


export default withRouter(NavDashboard);


