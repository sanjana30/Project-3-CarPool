import React from "react";

const styles = {
  containerStyle : {
    background: "#FEDCD2",
    padding: 20,
    marginTop: 20,
    marginBottom: 20
  }
}
export const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`} style={styles.containerStyle}>
    {children}
  </div>
);
