import axios from "axios";
import React, { useState } from "react";
import './Details.css';

// college
// degree
// grade
// startDate
// endDate
// currentEducation
function UserEducation() {


    const [validationError, setValidationError] = useState(false);
    const [college, setFname] = useState("");
    const [degree, setLname] = useState("");
    const [grade, setEmail] = useState("");
    const [startDate, setWebsite] = useState("");
    const [endData, setMobile] = useState("");
    const [summary, setSummery] = useState("");

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



    const userProfile = async () => {

        if (endData === "" || endData === "" || endData === "") {
            setValidationError(true);
            return;
        }

        const url = "http://localhost:8080/user/Profile/addEducation";
        const data = {
            college: college,
            degree: degree,
            grade: grade,
            startDate: startDate,
            endData: endData,
            id: localStorage.getItem("user"),
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
            <div className="container mt-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-8">
                        <form id="regForm">
                            <h1 id="register">Education Details</h1>
                            <div className="all-steps" id="all-steps"> <span className="step"><i className="fa fa-user"></i></span> <span className="step"><i className="fa fa-map-marker"></i></span> <span className="step"><i className="fa fa-shopping-bag"></i></span> <span className="step"><i className="fa fa-car"></i></span> <span className="step"><i className="fa fa-spotify"></i></span> <span className="step"><i className="fa fa-mobile-phone"></i></span> </div>
                            <div className="">
                                <h6>College name</h6>
                                <p> <input placeholder="Enter College Name" name="college" value={college} onChange={handleFname}
                                    className={college === "" && validationError ? "border border-danger" : ""} /></p>
                            </div>
                            <div className="">
                                <h6>Degree</h6>
                                <p><input placeholder="Enter your Degree" name="degree" value={degree} onChange={handleLname}
                                    className={degree === "" && validationError ? "border border-danger" : ""} /></p>
                            </div>
                            <div className="">
                                <h6>Grade</h6>
                                <p><input placeholder="Enter Grade Obtained" name="grade" value={grade} onChange={handleEmail}
                                    className={grade == "" && validationError ? "border border-danger" : ""} /></p>
                            </div>
                            <div className="">
                                <h6>Start Date</h6>
                                <p><input type="date" name="startData" value={startDate} onChange={handleWebsite}
                                    className={startDate == "" && validationError ? "border border-danger" : ""} /></p>
                            </div>
                            <div className="">
                                <h6>End Date</h6>
                                <p><input type="date" name="endData" value={endData} onChange={handleMobile}
                                    className={endData == "" && validationError ? "border border-danger" : ""} /></p>
                            </div>
                            {/* <div className="thanks-message text-center" id="text-message"> <img src="https://i.imgur.com/O18mJ1K.png" width="100" className="mb-4" />
                        <h3>Thankyou for your feedback!</h3> <span>Thanks for your valuable information. It helps us to improve our services!</span>
                    </div> */}
                            <div class="mb-3">
                                <button type="submit" class="btn btn-block text-uppercase" onClick={userProfile}>
                                    Submit
                                </button>
                            </div>
                            <div style={{ overflow: "auto" }} id="nextprevious">
                                <div style={{ float: "right" }}> <button type="button" id="prevBtn" onclick="nextPrev(-1)"><i className="fa fa-angle-double-left"></i></button> <button type="button" id="nextBtn" onclick="nextPrev(1)"><i className="fa fa-angle-double-right"></i></button> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};
export default UserEducation;
