import React from "react";
import {Map} from "../Custom";

export default (props) => {
    const styles = {
        containerstyle : {
            height: 100
        },
        mapstyle: {
            height: 100
        }
    }
    return(
        <div>Home
            <Map 
                containerElement={<div style={styles.containerstyle} />}
                mapElement={<div style={styles.mapstyle} />}
            />
        </div>
        
    )
}