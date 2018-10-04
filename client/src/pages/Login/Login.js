import React, {Component} from 'react';
import SubmitBtn from '../../components/SubmitBtn';
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import Home from "../../components/Home";
import {Col, Row, Container} from "../../components/Grid";
import {Input, FormBtn} from "../../components/Form";
import {Route} from "react-router-dom";
import Nav from "../../components/Nav"

class Login extends Component {
    state = {
        users: [],
        username: "",
        password: ""
    };

    handlePageChange() {

        this.props.history.push('/dashboard');
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.loginUser({
                    username: this.state.username,
                    password: this.state.password,
                }
            )
                .then(res => {
                        console.log(res.data);
                        // setter
                        sessionStorage.setItem('token', res.data.token);
                        this.handlePageChange();
                        // this.setState({users: res.data.response.docs, username: "", password: ""});
                        // console.log(this.state.users);
                    }
                )
                .catch(err => console.log(err));
        }
    };

    render() {
        return (

            <Container>

                <Row>
                    <Col size="sm-12">
                        <Jumbotron>
                            <h1>Login</h1>
                        </Jumbotron>
                        <form>
                            <label>username:</label>
                            <Input
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                name="username"
                                id="username"
                                placeholder="username (required)"
                            />
                            <label>password</label>
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                id="password"
                                placeholder="password (required)"
                            />

                            <FormBtn
                                // disabled={!(this.state.username && this.state.password)}
                                onClick={this.handleFormSubmit}
                            >
                                Search
                            </FormBtn>
                        </form>
                    </Col>

                </Row>

            </Container>


        )
    }
}

export default Login;

