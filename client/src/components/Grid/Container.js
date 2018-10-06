import React from "react";

const styles = {
    containerStyle: {
        background: "black",
        opacity: 0.8,
        // height: "300px"
    }
}
export const Container = ({fluid, children}) => (
    <div className={`container${fluid ? "-fluid" : ""}`} style={styles.containerStyle}>
        {children}
    </div>
);
