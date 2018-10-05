import React from "react";
import {Link} from "react-router-dom";
import Nav from "../Nav"

const styles = {

    homeBtn: {
        backgroundColor: "blue",
        marginLeft: 10
    }
}

const Master = () => (

    <div>
        <Nav/>
        <div>
            <img src="https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                 alt="logo"/>
            <div className="text-center">
                <button className="btn" style={styles.homeBtn}>
                    <Link to="/login">Login</Link>
                </button>

                <button className="btn" style={styles.homeBtn}>
                    <Link to="/register">Register</Link>
                </button>

            </div>
        </div>
    </div>
);

export default Master;