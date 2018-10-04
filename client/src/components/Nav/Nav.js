
import React from "react";
import Logo from "../images/logo.png"
const styles = {
    navStyle: {
        background: "#BFD8D2",
        marginBottom: 20
    }
}
const Nav = () => (
    <nav className="navbar navbar-light" style={styles.navStyle}>
        <a className="navbar-brand" href="#">
<<<<<<< HEAD
        <img src={Logo} width="30" height="30" alt="logo" />
=======
            <img src="../images/logo.png" width="30" height="30" alt="logo" />
>>>>>>> f1d718898d75184cae6dfefefef52fed6cc31fea
        </a>
    </nav>
);

export default Nav;