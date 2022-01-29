import React from "react";
import './Details.css';
//    company
//    designation
//    description
//    startDate
//    endDate
//    currentJob
function UserExperience() {
    return (
      <>
        <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-8">
                <form id="regForm">
                    <h1 id="register">Experience Details</h1>
                    <div className="all-steps" id="all-steps"> <span className="step"><i className="fa fa-user"></i></span> <span className="step"><i className="fa fa-map-marker"></i></span> <span className="step"><i className="fa fa-shopping-bag"></i></span> <span className="step"><i className="fa fa-car"></i></span> <span className="step"><i className="fa fa-spotify"></i></span> <span className="step"><i className="fa fa-mobile-phone"></i></span> </div>
                    <div className="">
                        <h6>Company Name</h6>
                        <p> <input placeholder="Enter Company Name" oninput="this.className = ''" name="fname" /></p>
                    </div>
                    <div className="">
                        <h6>Designation</h6>
                        <p><input placeholder="Enter Your Designation" oninput="this.className = ''" name="dd" /></p>
                    </div>
                    <div className="">
                        <h6>Start Date</h6>
                        <p><input type="date"  name="uname" /></p>
                    </div>
                    <div className="">
                        <h6>End Date</h6>
                        <p><input type="date"  name="uname" /></p>
                    </div>
                    <div className="">
                        <h6>Current Job</h6>
                        <p><input placeholder="Current Job" oninput="this.className = ''" name="dd" /></p>
                    </div>
                    {/* <div className="thanks-message text-center" id="text-message"> <img src="https://i.imgur.com/O18mJ1K.png" width="100" className="mb-4" />
                        <h3>Thankyou for your feedback!</h3> <span>Thanks for your valuable information. It helps us to improve our services!</span>
                    </div> */}
                    <div style={{overflow:"auto"}} id="nextprevious">
                        <div style={{float:"right"}}> <button type="button" id="prevBtn" onclick="nextPrev(-1)"><i className="fa fa-angle-double-left"></i></button> <button type="button" id="nextBtn" onclick="nextPrev(1)"><i className="fa fa-angle-double-right"></i></button> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
      </>
    )
};
export default UserExperience;
