import React from "react";
import {Link} from "react-router-dom";
import Car from "../images/car.png"
import "./Master.css";

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
                    <Link to="/login" style={{color: "#72A3A4"}}>Login</Link>
                </button>

                <br/>
                <button className="btn registerBtn">
                    <Link to="/register" style={{color: "#72A3A4"}}>Register</Link>
                </button>
            </div>

        </footer>

    </div>
);

export default Master;