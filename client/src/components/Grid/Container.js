import React from "react";

const styles = {
    containerStyle: {
        background: "#323232",
        color: "white",
        overflow: "scroll",
        paddingBottom: 500,
        paddingTop: 30
    }
}
export const Container = ({fluid, children}) => (
    <div className={`container${fluid ? "-fluid" : ""}`} style={styles.containerStyle}>
        {children}
    </div>
);
