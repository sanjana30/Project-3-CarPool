import React, {Component} from "react";
import { Map1 } from "../Custom";

class MapContainer extends Component {
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
    styles = {
        containerstyle: {
            height: 100
        },
        mapstyle: {
            height: 100
        }
    }
    render() {
        return (
            <div>Home
                <Map1
                    containerElement={<div style={this.styles.containerstyle} />}
                    mapElement={<div style={this.styles.mapstyle} />}
                    markers={this.state.markers}
                />
            </div>

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