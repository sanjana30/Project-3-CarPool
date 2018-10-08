import React from "react";
import "./Jumbotron.css";
import Car from "../images/car.png"

const Jumbotron = () => (
    <div>
        <header className="loginHeader"> Car Pool
        </header>
        <div className="imgDivs">
            <img src={Car} alt="logo" className="imgStyles"/>
        </div>

    </div>
);

export default Jumbotron;
