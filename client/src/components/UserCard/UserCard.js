import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const UserCard = props => (
    <div className="card">
        <div className="card-header">
            {props.status ? "Driver" : "Rider"}
        </div>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <h6 className="card-text">Phone: {props.phone}</h6>
            <h6 className="card-text">ID: {props.driverLicense}</h6>
            {props.status ? 
                <h6 className="card-text">Car #: {props.carNumber}</h6>
                : ""                
            }
          
            <a href="#" class="btn btn-primary">Connect</a>
        </div>
    </div>

);

export default UserCard;