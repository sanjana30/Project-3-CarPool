import React, {Component} from "react";
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"; 
import Pin from "../images/marker.png";
const Map1 = withGoogleMap(props => {

    // console.log(props.markers);
    return (
        
        <GoogleMap
            // ref={this.props.onMapLoad}
            defaultZoom = {8}
            defaultCenter = {{lat: 30.2672, lng: -97.7431}}
            // onClick = {this.props.onMapClick}
        >
         {console.log("-------------------------------\n"+props.usermarker+"\n--------------------")
         

        }
        {props.usermarker.map((marker, index) =>  (
            
             <Marker 
                    key={index}
                    position={marker.position}
                    onClick={()=>props.onMarkerClick()}
                    icon = {{
                        url: Pin,
                        scaledSize: { width: 32, height: 32 }
                    }}
                    
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
        {console.log("-------------------------------\n"+props.othermarkers+"\n--------------------")
         

        }

        {props.othermarkers.map((marker, index) =>  (
            
            <Marker 
                   key={index}
                   position={marker.source}
                   onClick={()=>props.onMarkerClick()}                  
           >
           </Marker>
           
       )
       )}      
        </GoogleMap>
   
    )
})


export default Map1;
