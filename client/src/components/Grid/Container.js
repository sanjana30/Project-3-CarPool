import React from "react";

const styles = {
    containerStyle: {
        background: "#323232",
        color: "white",
    }
}
export const Container = ({fluid, children}) => (
    <div className={`container${fluid ? "-fluid" : ""}`} style={styles.containerStyle}>
        {children}
    </div>
);
