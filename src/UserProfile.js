import React from "react";
import './Details.css';
import { useState } from "react";
import axios from 'axios';

function UserProfile() {
        const [validationError, setValidationError] = useState(false);
        const [fname, setFname] = useState("");
        const [lname, setLname] = useState("");
        const [email, setEmail] = useState("");
        const [website, setWebsite] = useState("");
        const [mobile, setMobile] = useState("");
        const [summery, setSummery] = useState("");
      
        const [userProfileList, setuserProfileList] = useState([]);
      
        const handleFname = (e) => {
          setFname(e.target.value);
        };

        const handleLname = (e) => {
            setLname(e.target.value);
          };
      
        const handleEmail = (e) => {
          setEmail(e.target.value);
        };
      
        const handleWebsite = (e) => {
          setWebsite(e.target.value);
        };
      
        const handleMobile = (e) => {
          setMobile(e.target.value);
        };

        const handleSummery = (e) => {
            setSummery(e.target.value);
          };
      
        const userProfile = async () => {
      
          if (fname == "" || lname == "" || email == "") {
            setValidationError(true);
            return;
          }
          
          const url = "http://localhost:8080/user/Profile/addProfile";
          const data = {
            fname: fname,
            lname: lname,
            email: email,
            website : website,
            mobile: mobile,
            summery: summery,
          };
          await axios.post(url, data);

          const newList = [userProfile, ...userProfileList];
          setuserProfileList(newList);
      
          // Clear in the End
          setFname("");
          setLname("");
          setEmail("");
          setWebsite("");
          setMobile("");
          setSummery("");

          setValidationError(false);
        };
    return (
      <>
        <div className="container mt-3">
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-8">
                <form id="regForm">
                    <h1 id="register">Enter Your Details To Your Profile</h1>
                    <div className="all-steps" id="all-steps"> <span className="step"><i className="fa fa-userProfile"></i></span> <span className="step"><i className="fa fa-map-marker"></i></span> <span className="step"><i className="fa fa-shopping-bag"></i></span> <span className="step"><i className="fa fa-car"></i></span> <span className="step"><i className="fa fa-spotify"></i></span> <span className="step"><i className="fa fa-mobile-phone"></i></span> </div>
                    <div className="tab">
                        <h6>Enter your First Name</h6>
                        <p> <input placeholder="First Name" name="fname" tabindex="10"  value={fname} onChange={handleFname}
                  className={fname == "" && validationError ? "border border-danger" : ""}/></p>
                    </div>
                    <div className="">
                        <h6>Enter your Last Name</h6>
                        <p><input placeholder="Last Name"  name="dd" tabindex="10"  value={lname} onChange={handleLname}
                  className={lname == "" && validationError ? "border border-danger" : ""}/></p>
                    </div>
                    <div className="">
                        <h6>Enter your Email</h6>
                        <p><input placeholder="Enter Email-Id"  name="dd" tabindex="10"  value={email} onChange={handleEmail}
                  className={email == "" && validationError ? "border border-danger" : ""}/></p>
                    </div>
                    <div className="">
                        <h6>Enter your Website</h6>
                        <p><input placeholder="Last Name"  name="dd" tabindex="10"  value={website} onChange={handleWebsite}
                  className={website == "" && validationError ? "border border-danger" : ""}/></p>
                    </div>
                    <div className="">
                        <h6>Enter your Contact</h6>
                        <p><input placeholder="Last Name"  name="dd" tabindex="10"  value={mobile} onChange={handleMobile}
                  className={mobile == "" && validationError ? "border border-danger" : ""}/></p>
                    </div>
                    <div className="">
                        <h6>Enter your Summery</h6>
                        <p><textarea class="form-control rounded" id="exampleFormControlTextarea1" rows="3" tabindex="10"  value={summery} onChange={handleSummery}
                  className={summery == "" && validationError ? "border border-danger" : ""}></textarea></p>
                    </div>
                    {/* <div className="thanks-message text-center" id="text-message"> <img src="https://i.imgur.com/O18mJ1K.png" width="100" className="mb-4" />
                        <h3>Thankyou for your feedback!</h3> <span>Thanks for your valuable information. It helps us to improve our services!</span>
                    </div> */}
                    <div class="mb-3">
              <button type="submit" class="btn btn-block text-uppercase"onClick={userProfile}>
              Submit
              </button>
            </div>
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
export default UserProfile;
