import React from "react";
import "./From.css";

const styles = {
    containerStyle : {
        paddingBottom: 0,
        height: "100%"
    }
}

export const Container = ({fluid, children}) => (
    <div>
        <header className="loginHeader"> Car Pool
        </header>
        < div
            className="containerStyle" style={styles.containerStyle}>
            < div
                className={`container${fluid ? "-fluid" : ""}`
                }>
                {
                    children
                }
            </div>
        </div>
    </div>
);
