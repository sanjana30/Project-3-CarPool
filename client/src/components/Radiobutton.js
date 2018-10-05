import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const RadioBtn = props => (
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-secondary active">
                                <input type="radio" name="options" id="driver" autocomplete="off" onClick={()=> this.changeDriverStatus("driver")} checked /> Driver
                            </label>
                            <label class="btn btn-secondary">
                                <input type="radio" name="options" id="rider" autocomplete="off" /> Rider
                            </label>
                            
                        </div> 
    //<button type="button" className="btn btn-primary" {...props}>Submit</button>
  
);

export default RadioBtn;
