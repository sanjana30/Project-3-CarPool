import React, {Component} from "react";
import {Map1} from "../Custom";
import {Container, Row, Col} from "../Grid";
import {Input, FormBtn} from "../Form";
import UserCard from "../UserCard";
import NavDashboard from "../NavDashboard";
import API from "../../utils/API";

class MapContainer extends Component {
    state = {
        markers: [],
        usermarker: [],
        source: "",
        destination: "",
        userId: "",
        userData: "",
        userDriving: true,
        clickedMarker: "",
        nameofuser: ""
    };
   
    componentDidMount =() => {
        
            API.fetchUserName()
                .then(res => {
                    this.setState({userData: res.data}, ()=>console.log(this.state.userData));
                })
                .catch(err => console.log(err));
        
    };    

    updateUserInfo = (location) => {
        API.addUserLocation(location)
            .then(response => console.log("response"))
            .catch(err => console.log(err));
    };
    fetchOtherUsers = () => {
        let array = this.state.markers;
        API.getOtherMarkers()
            .then(response => {
                console.log("response");

                response.data.map(item => {



                    //check status of driving
                    if (item.isDriver !== this.state.userDriving) {
                        // array.push(item);
                        // calculate distance between sources 
                        console.log(this.state.usermarker);
                        API.calculateDistance(this.state.usermarker[0].position.lat, this.state.usermarker[0].position.lng, item.source.lat, item.source.lng)
                            .then(res => {
                                console.log(res.data.rows[0].elements[0].distance.value);
                                if (res.data.rows[0].elements[0].distance.value <= 20000) {
                                    API.calculateDistance(this.state.usermarker[1].position.lat, this.state.usermarker[1].position.lng, item.destination.lat, item.destination.lng)
                                        .then(result => {
                                            console.log(result.data.rows[0].elements[0].distance.value);
                                            if (result.data.rows[0].elements[0].distance.value <= 20000) {
                                                array.push(item);
                                                console.log("array");
                                                this.setState({markers: array}, () => console.log("this.state.markers"));
                                            }   //destination distance check closed
                                        })
                                        .catch(err => console.log(err));
                                }   //source distance check closed
                            })
                            .catch(err => console.log(err));
                    }       //driver/rider status check closed
                });
                // this.setState({markers: array}, ()=>console.log(this.state.markers));
            })
            .catch(err => console.log(err));
    };
    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleMarkerClick = (id) => {
        console.log(id);
        this.state.markers.map(item => {
            if (item._id === id) {
                this.setState({clickedMarker: item}, () => console.log(this.state.clickedMarker));
            }
        })
    }
    setDrivingStatus = (event) => {
        if (event.target.value === "driver") {
            console.log("Hey! I am a driver");
            this.setState({userDriving: true});
            let status = {isDriver: true}
            API.updateDrivingStatus(status)
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
        if (event.target.value === "rider") {
            console.log("Hey! I am a rider");
            this.setState({userDriving: false});
            let status = {isDriver: false}
            API.updateDrivingStatus(status)
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }

    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        const newArr = this.state.usermarker;
        API.getGeoCode(this.state.source)
            .then((response) => {

                let sourceMarker = {
                    position: response.data.results[0].geometry.location
                };
                let sourcelocation = {
                    source: response.data.results[0].geometry.location
                };
                newArr.push(sourceMarker);
                API.getGeoCode(this.state.destination)
                    .then(res => {

                        let destinationMarker = {
                            position: res.data.results[0].geometry.location
                        };
                        newArr.push(destinationMarker);
                        let destinationlocation = {
                            destination: res.data.results[0].geometry.location,
                        };


                        this.setState({usermarker: newArr}, () => console.log("this.state.usermarker"));

                        this.updateUserInfo(sourcelocation);
                        this.updateUserInfo(destinationlocation);
                        this.fetchOtherUsers();
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));

    };
    styles = {
        containerstyle: {
            maxHeight: 400,
            marginBottom: 10
        },
        mapstyle: {
            height: 400
        },
        radioLabelStyle: {
            marginRight: 45
        },
        maincontainer : {
            paddingBottom: 100,
            overflow: "scroll"
        }
    };

    render() {
        return [
            <NavDashboard />,
            <Container fluid style={this.styles.maincontainer}>
                <Row>
                    <Col size="md-6">

                        <Input
                            placeholder="Source"
                            value={this.state.source}
                            onChange={this.handleInputChange}
                            name="source"
                        />
                    </Col>

                    <Col size="md-6">

                        <Input
                            placeholder="Destination"
                            value={this.state.destination}
                            onChange={this.handleInputChange}
                            name="destination"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col size="md-6">
                        <div class="form-check">

                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                                   value="driver" onClick={this.setDrivingStatus} defaultChecked/>
                            <label class="form-check-label" for="exampleRadios1" style={this.styles.radioLabelStyle}>
                                Driver
                            </label>
                        {/* </div>
                        <div class="form-check"> */}
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                                   value="rider" onClick={this.setDrivingStatus}/>
                            <label class="form-check-label" for="exampleRadios2" style={this.styles.radioLabelStyle}>
                                Rider
                            </label>
                        </div>

                    </Col>
                    <Col size="md-6">
                        <FormBtn
                            disabled={!(this.state.source && this.state.destination)}
                            onClick={this.handleFormSubmit} style={this.styles.submitStyle}
                        >
                            Submit
                        </FormBtn>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Map1
                            containerElement={<div style={this.styles.containerstyle}/>}
                            mapElement={<div style={this.styles.mapstyle}/>}
                            usermarker={this.state.usermarker}
                            onMarkerClick={this.handleMarkerClick}
                            othermarkers={this.state.markers}
                        />
                    </Col>
                </Row>
                {

                    this.state.clickedMarker ?

                        <Row>
                            <Col size="md-12">
                            <UserCard
                                name={this.state.clickedMarker.name}
                                phone={this.state.clickedMarker.phone}
                                driverLicense={this.state.clickedMarker.driverLicence}
                                carNumber={this.state.clickedMarker.licencePlate}
                                id={this.state.clickedMarker._id}
                                status={this.state.clickedMarker.isDriver}
                                userNumber={this.state.userData.phone}
                                userName={this.state.userData.name}
                                userDriverLicense={this.state.userData.driverLicence}
                                userCarNumber={this.state.userData.licencePlate}
                            />
                            </Col>
                        </Row>

                        : <Row></Row>

                }
            </Container>

        ]
    }
}

export default MapContainer;

