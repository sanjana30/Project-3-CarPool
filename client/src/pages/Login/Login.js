import React, {Component} from 'react';
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import {Col, Row, Container} from "../../components/Grid";
import {Input, FormBtn} from "../../components/Form";

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

            <div>

                <Jumbotron>
                </Jumbotron>

                <Container>
                    <form>
                        <label></label>
                        <Input
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            name="username"
                            id="username"
                            placeholder="username"
                        />
                        <label></label>
                        <Input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                            id="password"
                            placeholder="password"
                        />

                        <FormBtn
                            // disabled={!(this.state.username && this.state.password)}
                            onClick={this.handleFormSubmit}
                        >
                            Login
                        </FormBtn>
                    </form>
                    <footer>

                    </footer>
                </Container>
            </div>


        )
    }
}

export default Login;

