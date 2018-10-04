import React, {Component} from 'react';
// import SubmitBtn from '../../components/SubmitBtn';
import API from "../../utils/API";
import Nav from "../../components/NavDashboard";
import {Col, Row, Container} from "../../components/Grid";
// import {Input, FormBtn} from "../../components/Form";


class Dashboard extends Component {
    // state = {
    //     users: [],
    //     username: "",
    //     password: ""
    // };
    //
    //
    // handleInputChange = event => {
    //     const {name, value} = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };
    //
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.username && this.state.password) {
    //         API.loginUser({
    //                 username: this.state.username,
    //                 password: this.state.password,
    //             }
    //         )
    //             .then(res => {
    //                     console.log(res.data);
    //                     // setter
    //                     sessionStorage.setItem('token', res.data.token);
    //                     //
    //                     // this.setState({users: res.data.response.docs, username: "", password: ""});
    //                     // console.log(this.state.users);
    //                 }
    //             )
    //             .catch(err => console.log(err));
    //     }
    // };

    render() {
        return (
            <Container>
                <Nav>

                </Nav>
                <div>
                    Welcome Dashboard
                </div>

            </Container>
        )
    }
}

export default Dashboard;

