import React, {Component} from "react";
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"; 
const Map1 = withGoogleMap(props => {
    return (
            
        <GoogleMap
            // ref={this.props.onMapLoad}
            defaultZoom = {8}
            defaultCenter = {{lat: 30.2672, lng: -97.7431}}
            // onClick = {this.props.onMapClick}
        >
        {props.markers.map((marker) => (
            <Marker 
                    position={marker.position}
            ></Marker>
            
        )
        )}       
        </GoogleMap>
   
    )
})


export default Map1;
