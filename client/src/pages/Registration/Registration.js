import React, {Component} from 'react';
import API from "../../utils/API";
import {Col, Row, Container, Input, FormBtn} from "../../components/Register";
import Select from 'react-select';
import 'react-dropdown/style.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const options = [{value: 'true', label: 'Yes'}, {value: 'false', label: 'No'}];

class Registration extends Component {
    state = {
        username: "",
        name: "",
        dob: moment(),
        phone: "",
        driverLicence: "",
        licencePlate: "",
        isCarOwner: null,
        password: "",
        confirmPassword: "",
        visibility: 'hideDiv',
    };

    constructor(props) {
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    componentDidMount() {
    }

    handlePageChange() {
        this.props.history.push('/login');
    };


    handleChange = (isCarOwner) => {
        this.setState({isCarOwner});
        if (isCarOwner.value === 'true') {
            this.setState({visibility: 'form-control inputStyle showDiv'});
        } else {
            this.setState({visibility: 'hideDiv'});
        }
        console.log(`Option selected:`, isCarOwner);
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleDateChange = (date) => {
        this.setState({
            dob: date
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        if (this.state.password === this.state.confirmPassword) {
            API.registerNewUser(
                this.state
            ).then(res => {
                    console.log(res);
                    this.handlePageChange();
                }
            )
                .catch(err => console.log(err));
        } else {
            alert("Password does not match!!");
        }
    };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="sm-12">
                            <form>
                                <br/>
                                {/*<label>Username</label>*/}
                                <Input
                                    value={this.state.username}
                                    onChange={this.handleInputChange}
                                    name="username"
                                    id="username"
                                    placeholder="username * "
                                />
                                {/*<label>Name</label>*/}
                                <Input
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    name="name"
                                    id="name"
                                    placeholder="name *"
                                />
                                <Row>
                                    <Col size="sm-6">
                                        <label>date of birth </label>
                                    </Col>
                                    <Col size="sm-6">
                                        <DatePicker
                                            className="form-control inputStyle"
                                            selected={this.state.dob}
                                            onChange={this.handleDateChange}
                                        />
                                    </Col>
                                </Row>


                                {/*<label></label>*/}
                                <Input
                                    value={this.state.phone}
                                    onChange={this.handleInputChange}
                                    name="phone"
                                    id="phone"
                                    placeholder="phone *"
                                />
                                <br/>
                                <label>do you have a car? </label>
                                <Select className="boxstyle" options={options} onChange={this.handleChange}>
                                    Do you have a car? </Select>
                                <br/>
                                <Input
                                    value={this.state.driverLicence}
                                    onChange={this.handleInputChange}
                                    name="driverLicence"
                                    id="driverLicence"
                                    className={this.state.visibility}
                                    placeholder="driverLicence *"
                                />
                                <Input
                                    value={this.state.licencePlate}
                                    onChange={this.handleInputChange}
                                    name="licencePlate"
                                    id="licencePlate"
                                    className={this.state.visibility}
                                    placeholder="licencePlate *"
                                />

                                {/*<label>Password</label>*/}
                                <Input
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    name="password"
                                    id="password"
                                    placeholder="password *"
                                    type="password"
                                />
                                {/*<label>Confirm Password</label>*/}
                                <Input
                                    value={this.state.confirmPassword}
                                    onChange={this.handleInputChange}
                                    name="confirmPassword"
                                    placeholder="confirm password *"
                                    type="password"
                                />

                                <FormBtn
                                    onClick={this.handleFormSubmit}
                                >
                                </FormBtn>
                            </form>
                        </Col>

                    </Row>
                    <Row>
                        <Col size="sm-12">
                            <button className="btn goBackBtn">
                                <a href="/" style={{color: "#72A3A4"}}>Go Back?</a>
                            </button>
                        </Col>
                    </Row>

                </Container>
            </div>
        )

    }

}

export default Registration;

