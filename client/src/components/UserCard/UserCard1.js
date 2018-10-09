import React from "react";
const accountSid = 'AC974df9799ef95cc1b2de3bb376851d80';
const authToken = '06e0c91a8600721508b38d52a8579179';
const client = require('twilio')(accountSid, authToken);
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const UserCard = props => {
    
    handleTextAlert = event => {
        client.messages 
      .create({
         body: 'I am ready!',
         from: '+15126437525',
         to: '+1' + props.phone
       })
      .then(message => console.log(message.sid))
      .done();
      alert("text sent!");
    };
    return (
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
              
                <div>
            <button onClick=
            {this.handleTextAlert}>Send Alert!</button>
          </div>
       
          <div>
            <button onClick=
            {this.handleTextAlert}>Send Alert!</button>
          </div>
            </div>
        </div>
    );
}
export default UserCard;
