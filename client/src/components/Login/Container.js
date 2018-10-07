import React from "react";
import "./From.css";

export const Container = ({fluid, children}) => (
    <div className="containerLoginStyle">
        <div
            className={`container${fluid ? "-fluid" : ""}`
            }>
            {
                children
            }
        </div>
    </div>
);
