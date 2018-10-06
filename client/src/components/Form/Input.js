import React from "react";

const styles = {
    boxstyle: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        background: "transparent",
        color: "red"
    }
}

export const Input = props => (
    <div className="form-group">
        <input className="form-control" {...props} style={styles.boxstyle}/>
    </div>
);
