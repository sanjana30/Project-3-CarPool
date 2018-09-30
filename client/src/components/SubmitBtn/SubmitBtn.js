import React from "react";
import "./SubmitBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SubmitBtn = props => (
  
    <button type="button" className="btn btn-primary" {...props}>Submit</button>
  
);

export default SubmitBtn;
