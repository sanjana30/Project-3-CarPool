// import React from "react";
// import {Map} from "../Custom";
//
// export default (props) => {
//     const styles = {
//         containerstyle : {
//             height: 100
//         },
//         mapstyle: {
//             height: 100
//         }
//     }
//     return(
//         <div>Home
//             <Map
//                 containerElement={<div style={styles.containerstyle} />}
//                 mapElement={<div style={styles.mapstyle} />}
//             />
//         </div>
//
//     )
// }

import React from "react";
import {Link} from "react-router-dom";

const styles = {

    homeBtn: {
        backgroundColor: "blue",
        marginLeft: 10
    }
}

const Home = () => (
    <div className="text-center">

        <button className="btn" style={styles.homeBtn}>
            <Link to="/login">Login</Link>
        </button>

        <button className="btn" style={styles.homeBtn}>
            <Link to="/register">Register</Link>
        </button>

    </div>



);

export default Home;