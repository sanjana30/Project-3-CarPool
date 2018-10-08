import React from "react";

const styles = {
    cardStyle : {
        // width: "100%",
        // marginTop: 20,
        // marginLeft: 10,
        // marginRight: 10,
        // marginBottom: 20
    },
    cardheading : {
        background: "#222627"
    },
    cardbody : {
        background: "#333333"
    },
    buttonStyle : {
        background: "#72A3A4",
        color: "black"
    }
}

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const UserCard = props => (    
    <div className="card" style={styles.cardStyle}>
        {console.log(props)}
        <div className="card-header" style={styles.cardheading}>
            {props.status ? "Driver" : "Rider"}
        </div>
        <div className="card-body" style={styles.cardbody}>
            <h5 className="card-title">{props.name}</h5>
            <h6 className="card-text">Phone: {props.phone}</h6>
            <h6 className="card-text">ID: {props.driverLicense}</h6>
            {props.status ? 
                <h6 className="card-text">Car #: {props.carNumber}</h6>
                : ""                
            }
          
            <a href="#" class="btn" style={styles.buttonStyle}>Connect</a>
        </div>
    </div>

);

export default UserCard;
