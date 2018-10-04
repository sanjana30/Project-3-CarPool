import React from "react";
import "./Slide.css";

const Slide = ({children}) => (
    <div class="wrapper" >

        <div id="slide">
            <div>
            {children}
            </div>
        </div>
    </div>
);

export default Slide;





