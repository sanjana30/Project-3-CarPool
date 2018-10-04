import React, {Component} from "react";
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"; 
const Map1 = withGoogleMap(props => {

    // console.log(props.markers);
    return (
            
        <GoogleMap
            // ref={this.props.onMapLoad}
            defaultZoom = {8}
            defaultCenter = {{lat: 30.2672, lng: -97.7431}}
            // onClick = {this.props.onMapClick}
        >
        {props.usermarker.map((marker, index) =>  (
             <Marker 
                    key={index}
                    position={marker.position}
                    onClick={()=>props.onMarkerClick()}
            >
                {/* {marker.showInfo && (
                    <InfoWindow onCloseClick={()=>props.onMarkerClose(marker)}>
                        {
                            <button>Connect</button>
                        }
                    </InfoWindow>
                )} */}
            </Marker>
            
        )
        )}       
        </GoogleMap>
   
    )
})


export default Map1;
