import React, {Component} from "react";
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"; 
class Map extends Component {
    state = {
        markers: [
            {
                position: {
                    lat: 30.2672,
                    lng: -97.7431
                }
            }
        ]
    }
    render(){
        // const markers = this.props.markers || [];
        return (
            
                <GoogleMap
                    // ref={this.props.onMapLoad}
                    defaultZoom = {8}
                    defaultCenter = {{lat: 30.2672, lng: -97.7431}}
                    // onClick = {this.props.onMapClick}
                >
                {/* {markers.map((marker,index) => (
                    <Marker
                        {...marker}
                        // onRightClick = {()=> props.onMarkerRightClick(index)}
                    />
                ))} */}
                <Marker
                    position = {this.state.markers.position} />
                
                </GoogleMap>
           
        )
    }
}
export default withGoogleMap(Map);
