import React from "react";
import {Link} from "react-router-dom";
import Logo from "../images/carpool_logo.png"
import Car from "../images/car.png"
import "./Master.css";
import Nav from "../Nav"


const Master = () => (

    <div>
        <header className="headerstyle"> Car Pool
        </header>
        <div className="imgDiv">
            <img src={Car} alt="logo" className="imgStyle"/>

        </div>
        <footer className="footer">
            <div className="text-center">
                <button className="btn loginBtn">
                    <Link to="/login" style={{color: "#faebd7"}}>Login</Link>
                </button>

                <br/>
                <button className="btn registerBtn">
                    <Link to="/register" style={{color: "#faebd7"}}>Register</Link>
                </button>
            </div>

        </footer>

    </div>
);

export default Master;