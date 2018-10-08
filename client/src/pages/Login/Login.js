import React, {Component} from 'react';
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import {Input, FormBtn, Container} from "../../components/Login";

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
                        <br/>
                        <FormBtn
                            onClick={this.handleFormSubmit}
                        >
                            Login
                        </FormBtn>
                    </form>

                    <button className="btn goBacklogin">
                        <a href="/" style={{color: "#72A3A4"}}>Go Back?</a>
                    </button>

                </Container>
            </div>


        )
    }
}

export default Login;

