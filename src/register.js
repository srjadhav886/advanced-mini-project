import React from 'react';
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";

import { useEffect, useState } from "react";




export default class Register extends Component {
    render() {
        return (
            <div >
                <MyComponent />
            </div>
        );
    }
}


const MyComponent = (props) => {

    useEffect(() => {
        document.title = "MyComponent"
    }, [])

    const [validationError, setValidationError] = useState(false);
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [userList, setUserList] = useState([]);

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleLastname = (e) => {
        setLastname(e.target.value);
    };



    const addUser = () => {

        if (firstName === "" || lastName === "" || password === "" || email === "") {
            setValidationError(true);
            return;
        }


        const url = "http://localhost:8080/user/register";
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        };
        axios.post(url, data)
            .then((response) => {
                swal(response.data);
                window.location.href = "/login";
            })
            .catch((error) => {
                swal("something went wrong");
            });


        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");

        setValidationError(false);
    };



    return (
        <div className="divform">
            <div className="container">
                <div className="row px-3">
                    <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
                        <div className="img-left d-none d-md-flex"><img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample photo" className="img-fluid" style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} /></div>

                        <div className="card-body">
                            <h4 className="title text-center mt-4">
                                Register account
                            </h4>
                            <form className="form-box px-3">
                                <div className="form-input">
                                    <span><i className="fa fa-user"></i></span>
                                    <input type="text" name="" placeholder="Full Name" tabindex="10" value={firstName} onChange={handleFirstname}
                                        className={firstName === "" && validationError ? "border border-danger" : ""} />
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-user"></i></span>
                                    <input type="email" name="" placeholder="Last Name" tabindex="10" value={lastName} onChange={handleLastname}
                                        className={lastName === "" && validationError ? "border border-danger" : ""} />
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-envelope-o"></i></span>
                                    <input type="text" name="" placeholder="Email" value={email} onChange={handleEmail}
                                        className={email === "" && validationError ? "border border-danger" : ""} />
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-key"></i></span>
                                    <input type="password" name="" placeholder="enter Password" value={password} onChange={handlePassword}
                                        className={password === "" && validationError ? "border border-danger" : ""} />
                                </div>

                                <div class="mb-3">
                                    <button type="submit" class="btn btn-block text-uppercase" onClick={addUser}>
                                        Register
                                    </button>
                                </div>



                                <hr className="my-4" />

                                <div className="text-center mb-2">
                                    Alreay have account?
                                    <a href='./login' className="register-link">
                                        Login here
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// export default Register;
