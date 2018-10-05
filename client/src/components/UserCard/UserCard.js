import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const UserCard = props => (
    <div className="card">
        <div className="card-header">
            Featured
        </div>
        <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Connect</a>
        </div>
    </div>

);

export default UserCard;
