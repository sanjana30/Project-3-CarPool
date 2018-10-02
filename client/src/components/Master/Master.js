import React from "react";
import {Link} from "react-router-dom";

const styles = {

    homeBtn: {
        backgroundColor: "blue",
        marginLeft: 10
    }
}

const Master = () => (
    <div className="text-center">

        <button className="btn" style={styles.homeBtn}>
            <Link to="/login">Login</Link>
        </button>

        <button className="btn" style={styles.homeBtn}>
            <Link to="/register">Register</Link>
        </button>

    </div>
);

export default Master;