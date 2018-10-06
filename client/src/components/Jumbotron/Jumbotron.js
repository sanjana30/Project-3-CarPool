import React from "react";
import "./Jumbotron.css";
import Car from "../images/car.png"

const Jumbotron = ({children}) => (
    <div>
        <header className="headerstyle"> Car Pool
        </header>
        <div className="jumbotron">
            <img src={Car} alt="logo" className="imgStyle"/>
            {children}
        </div>
    </div>
);

export default Jumbotron;
