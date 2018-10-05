import React from "react";
import Logo from "../images/carpool_logo.png"
const styles = {
    navStyle: {
        background: "white",
        // marginBottom: 20
    },

    imgStyle: {
        width: "150px",
        height: "50px",
        verticalAlign: "middle",
        borderStyle: "none",
    }
}
const Nav = () => (
    <nav className="navbar navbar-light" style={styles.navStyle}>
        <a className="navbar-brand" href="#">
            <img className="imgStyle" src={Logo} width="30" height="30" alt="logo"/>
        </a>
    </nav>
);

export default Nav;