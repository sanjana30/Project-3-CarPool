import React, {Component} from 'react';
import SubmitBtn from '../../components/SubmitBtn';
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import {Col, Row, Container} from "../../components/Grid";
import {Input, FormBtn} from "../../components/Form";

class Registration extends Component {
    state = {
        username: "",
        name: "",
        dob: "",
        phone: "",
        driverLicence: "",
        licencePlate: "",
        isCarOwner: "",
        password: "",
    };

    componentDidMount() {

    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        API.registerNewUser(
            this.state
        ).then(res => {
            console.log(res);
            }
        )
            .catch(err => console.log(err));

    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="sm-12">
                        <Jumbotron>
                            <h1>Registration</h1>
                        </Jumbotron>
                        <form>
                            <label>Username</label>
                            <Input
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                name="username"
                                id="username"
                                placeholder="username (required)"
                            />
                            <label>Name</label>
                            <Input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name"
                                id="name"
                                placeholder="name (required)"
                            />
                            <label>DOB</label>
                            <Input
                                value={this.state.dob}
                                onChange={this.handleInputChange}
                                name="dob"
                                id="dob"
                                placeholder="dob (required)"
                            />
                            <label>Phone</label>
                            <Input
                                value={this.state.phone}
                                onChange={this.handleInputChange}
                                name="phone"
                                id="phone"
                                placeholder="phone (required)"
                            />

                            <label>Do you own a car?
                            </label>

                            <Input type="radio" name="isCarOwner"
                                   onChange={this.handleInputChange}
                                   value="true"/>Yes
                            <Input type="radio" name="isCarOwner"
                                   onChange={this.handleInputChange}
                                   value="false"/>No

                            <br></br>
                            <label>Driver Licence</label>
                            <Input
                                value={this.state.driverLicence}
                                onChange={this.handleInputChange}
                                name="driverLicence"
                                id="driverLicence"
                                placeholder="driverLicence (required)"
                            />
                            <label>Licence Plate</label>
                            <Input
                                value={this.state.licencePlate}
                                onChange={this.handleInputChange}
                                name="licencePlate"
                                id="licencePlate"
                                placeholder="licencePlate (required)"
                            />

                            <label>Password</label>
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                id="password"
                                placeholder="password (required)"
                            />
                            <label>Confirm Password</label>
                            <Input
                                //value={this.state.password}
                                // onChange={this.handleInputChange}
                                // name="password"
                                // id="password"
                                placeholder="password (required)"
                            />

                            <SubmitBtn
                                onClick={this.handleFormSubmit}
                            >
                                Search
                            </SubmitBtn>
                        </form>
                    </Col>

                </Row>

            </Container>
        )

    }

}

export default Registration;

