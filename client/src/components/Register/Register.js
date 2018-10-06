import React from "react";
import "./Register.css";

const Register = (props) => (
    <div className="card">
        <div className="card-body mb-4">

            <h2 className="text-center font-weight-bold pt-4 pb-5"><strong>Steps form example</strong></h2>

            <!-- Stepper -->
            <div className="steps-form">
                <div className="steps-row setup-panel">
                    <div className="steps-step">
                        <a href="#step-9" type="button" className="btn btn-indigo btn-circle">1</a>
                        <p>Step 1</p>
                    </div>
                    <div className="steps-step">
                        <a href="#step-10" type="button" className="btn btn-default btn-circle" disabled="disabled">2</a>
                        <p>Step 2</p>
                    </div>
                    <div className="steps-step">
                        <a href="#step-11" type="button" className="btn btn-default btn-circle" disabled="disabled">3</a>
                        <p>Step 3</p>
                    </div>
                </div>
            </div>

            <form role="form" action="" method="post">

                <!-- First Step -->
                <div className="row setup-content" id="step-9">
                    <div className="col-md-12">
                        <h3 className="font-weight-bold pl-0 my-4"><strong>Step 1</strong></h3>
                        <div className="form-group md-form">
                            <label for="yourName" data-error="wrong" data-success="right">First Name</label>
                            <input id="yourName" type="text" required="required" className="form-control validate">
                        </div>
                        <div className="form-group md-form mt-3">
                            <label for="yourLastName" data-error="wrong" data-success="right">Last Name</label>
                            <input id="yourLastName" type="text" required="required" className="form-control validate">
                        </div>
                        <div className="form-group md-form mt-3">
                            <label for="yourAddress" data-error="wrong" data-success="right">Address</label>
                        </div>
                        <button className="btn btn-indigo btn-rounded nextBtn float-right" type="button">Next</button>
                    </div>
                </div>

                <!-- Second Step -->
                <div className="row setup-content" id="step-10">
                    <div className="col-md-12">
                        <h3 className="font-weight-bold pl-0 my-4"><strong>Step 2</strong></h3>
                        <div className="form-group md-form">
                            <label for="companyName" data-error="wrong" data-success="right">Company Name</label>
                            <input id="companyName" type="text" required="required" className="form-control validate">
                        </div>
                        <div className="form-group md-form mt-3">
                            <label for="companyAddress" data-error="wrong" data-success="right">Company Address</label>
                            <input id="companyAddress" type="text" required="required" className="form-control validate">
                        </div>
                        <button className="btn btn-indigo btn-rounded prevBtn float-left" type="button">Previous</button>
                        <button className="btn btn-indigo btn-rounded nextBtn float-right" type="button">Next</button>
                    </div>
                </div>

                <!-- Third Step -->
                <div className="row setup-content" id="step-11">
                    <div className="col-md-12">
                        <h3 className="font-weight-bold pl-0 my-4"><strong>Step 3</strong></h3>
                        <button className="btn btn-indigo btn-rounded prevBtn float-left" type="button">Previous</button>
                        <button className="btn btn-default btn-rounded float-right" type="submit">Submit</button>
                    </div>
                </div>

            </form>

        </div>
    </div>
);

export default Register;
