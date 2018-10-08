import React from "react";
import "./From.css";

export const Container = ({fluid, children}) => (
    <div>
        <header className="loginHeader"> Car Pool
        </header>
        < div
            className="containerStyle">
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
