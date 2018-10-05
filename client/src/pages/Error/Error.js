import React from "react";
import "./Error.css";
import Car from "../../components/images/accident.gif"
// import { url } from "inspector";



const Error = () => (
  
    <div>
        <img src={Car} className="imageclass" />
        <div className="errortext"><h1>404 Error!</h1></div>
    </div>
  
);

export default Error;
