import React, { Component } from "react";
import { Map1 } from "../Custom";
import { Container, Row, Col } from "../Grid";
import { Input, FormBtn } from "../Form";
import API from "../../utils/API";

class MapContainer extends Component {
    state = {
        markers: [],
        usermarker: [],
        source: "",
        destination: "",
        userId: "",
        userData: ""
    };
    updateUserInfo = (location) => {
        // API.getLoggedUserDetail()
        //     .then(res =>{
        //         console.log(res.data._id);
        //         this.setState({userId: res.data._id})
        //         API.addUserLocation(res.data._id, location)
        //             .then(response => console.log(response))
        //             .catch(err => console.log(err));
        //     })
        //     .catch(err => console.log(err));
        API.addUserLocation(location)
                    .then(response => console.log(response))
                    .catch(err => console.log(err));
    };
    fetchOtherUsers = () => {
        API.getOtherMarkers(this.state.userId)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    };
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    handleFormSubmit = (event) => {
        event.preventDefault();
        const newArr = this.state.markers;       
        API.getGeoCode(this.state.source)
            .then((response) => {
                
                let sourceMarker = {
                    position: response.data.results[0].geometry.location
                }
                let sourcelocation = {
                    source: response.data.results[0].geometry.location
                }
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
                        this.setState({ usermarker: newArr });
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
            height: 600
        },
        mapstyle: {
            height: 600
        }
    };
    render() {
        return (
            <Container fluid>
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
                    <Col size="md-12">
                        <FormBtn
                            disabled={!(this.state.source && this.state.destination)}
                            onClick={this.handleFormSubmit}
                        >
                            Submit
                        </FormBtn>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Map1
                            containerElement={<div style={this.styles.containerstyle} />}
                            mapElement={<div style={this.styles.mapstyle} />}
                            usermarker={this.state.usermarker}
                            onMarkerClick={this.handleMarkerClick}
                        />
                    </Col>
                </Row>
                {
                    !this.state.userData ?<div>ABC</div> : <div></div>
                }
                

            </Container>

        )
    }
}

export default MapContainer;

// export default (props) => {
//     const styles = {
//         containerstyle: {
//             height: 100
//         },
//         mapstyle: {
//             height: 100
//         }
//     }
//     return (
//         <div>Home
//             <Map
//                 containerElement={<div style={styles.containerstyle} />}
//                 mapElement={<div style={styles.mapstyle} />}
//                 markers={{ lat: 30.2672, lng: -97.7431 }}
//             />
//         </div>

//     )
// }

