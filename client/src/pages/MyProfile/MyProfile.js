import React, {Component} from 'react';
import API from "../../utils/API";
import {Col, Row, Container} from "../../components/Grid";
import NavDashboard from '../../components/NavDashboard/NavDashboard';

class MyProfile extends Component {
    state = {
        username: "",
        name: "",
        dob: "",
        phone: "",
        driverLicence: "",
        licencePlate: "",
    };

    constructor(props) {
        super(props);
        this.handleUserProfile();
    }

    handleUserProfile = event => {
        API.getLoggedUserDetail().then(res => {
                console.log(res.data);
                this.setState({username: res.data.username});
                this.setState({name: res.data.name});
                this.setState({dob: res.data.dob});
                this.setState({phone: res.data.phone});
                this.setState({driverLicence: res.data.driverLicence});
                this.setState({licencePlate: res.data.licencePlate});

            }
        ).catch(err => console.log(err));
    };

    styles = {
        containerstyle : {
            height: "100%"
        },
        colstyle : {
            textAlign: "center"
        }
    }

    render() {
        return [
            <NavDashboard />,
            <Container style={this.styles.containerstyle}>
                <h2 style={this.styles.colstyle}>My Profile
                </h2>
                <Row>
                    <Col size="sm-12">
                        <label>Username :   </label>
                        {this.state.username}
                    </Col>
                    <Col size="sm-12">
                        <label>Name :   </label>
                        {this.state.name}
                    </Col>
                    <Col size="sm-12">
                        <label>Date-Of-Birth :  </label>
                        {this.state.dob}
                    </Col>
                    <Col size="sm-12">
                        <label>Phone :  </label>
                        {this.state.phone}
                    </Col>
                    <Col size="sm-12">
                        <label>Driver's License # : </label>
                        {this.state.driverLicence}
                    </Col>
                    <Col size="sm-12">
                        <label>Licence Plate #:  </label>
                        {this.state.licencePlate ? this.state.licencePlate : "Not Specified"}
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-12" style={this.styles.colstyle}>
                        <button className="btn goBackBtn">
                            <a href="/dashboard" style={{color: "#72A3A4"}}>Go Back?</a>
                        </button>
                    </Col>
                </Row>
            </Container>
        ]
    }
}

export default MyProfile;

