import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ marginLeft: 150, marginBottom: 15 ,marginTop: 15 , backgroundColor: "#72A3A4"}} className="btn">
    {props.children}
  </button>
);
